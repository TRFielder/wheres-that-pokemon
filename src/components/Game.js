import { useState, useEffect } from "react";
import '../styles/Game.css';
import pokehunt_2 from "../assets/images/pokehunt-2.png"
import * as firebase from "../firebaseFuncs.js"
import Character from "../characters";
import Selection from "./Selection.js"
import ScoreCollection from "./ScoreCollection";

const Game = (props) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [foundChars, setFoundChars] = useState({
                                                    "cleffa": false,
                                                    "graveler": false,
                                                    "togepi": false,
                                                    "trubbish": false
                                                })

    const [{x, y}, setCoordinates] = useState({x:0,
                                               y:0});

    const [win, setWin] = useState(false);


    useEffect(() => {
        const image = document.getElementById("game-image");
        image.addEventListener("mousedown", (e) => {
        getClickPosition(image, e);
        });
        
        const getClickPosition = (image, event) => {
            const rect = image.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            //Call function to place targeting box
            placeBox(x, y);

           /* firebase.getCoordinates(pokemon).then(
                (data) => {
                    checkLocations(x, y, data)
                }
            );*/
            setMenuVisible(true)
            setCoordinates({x: x, y: y});
        }
    }, []);

    useEffect(() => {
        console.log("State updated!")
        if(Object.values(foundChars).every(
            value => value === true
        )){
            console.log("All found, you win")
            setWin(true);
        }
    },[foundChars])

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    }

    const placeBox = (x, y) => {
        //Remove existing circle if there is one
        let oldBox = document.getElementById("selection");
        if(typeof(oldBox) != "undefined" && oldBox != null){
            oldBox.remove();
        }

        const owningFragment = document.getElementById("Game");
        //Subtract radius from (x,y) to center the selection circle over the cursor
        const radius = 18;

        const selection = document.createElement("div");
        selection.className = "selected-location";
        selection.id = "selection";
        selection.style.left = `${x-radius}px`;
        selection.style.top = `${y-radius}px`;
        owningFragment.appendChild(selection);
    }

    const checkLocations = async (x, y, poke) => {
        console.log(`The pokemon to look up is ${poke}`)

        return (firebase.getCoordinates(poke).then(
            data => {
                let selectedChar = new Character(data.xmin,
                                                data.xmax,
                                                data.ymin,
                                                data.ymax);

                if(selectedChar.checkIfValidX(x) && selectedChar.checkIfValidY(y)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        ))
    }

    const markAsFound = (poke) => {

        checkLocations(x,y,poke).then( isValid => {
            if(!foundChars[poke] && isValid) {
                setFoundChars(prevState => ({
                    ...prevState,
                    [poke]: true
                }))
            }
        });  
    }

    return (
        <>
        {win
        ?   <ScoreCollection startTime={props.startTime}/>  
        :    <div id="Game">
            <img src={pokehunt_2} alt="Many pokemon in a Where's Wally style" id="game-image"></img>
            <Selection visible={isMenuVisible} toggleMenu={toggleMenu} x={x} y={y} visibleChars={foundChars} markAsFound={markAsFound} checkLocations={checkLocations}/>
            </div>}            
        </>
    );
}

  export default Game;