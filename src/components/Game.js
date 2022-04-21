import { useState, useEffect } from "react";
import '../styles/Game.css';
import pokehunt_2 from "../assets/images/pokehunt-2.png"
import * as firebase from "../firebaseFuncs.js"
import Character from "../characters";
import Selection from "./Selection.js"

function Game() {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [foundChars, setFoundChars] = useState({
                                                    cleffa: false,
                                                    graveler: false,
                                                    togepi: false,
                                                    trubbish: false
                                                })

    const [{x, y}, setCoordinates] = useState({x:0,
                                               y:0});


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
            //
            let pokemon = selectPokemon()
            firebase.getCoordinates(pokemon).then(
                (data) => {
                    checkLocations(x, y, data)
                }
            );
            setMenuVisible(true)
            setCoordinates({x: x, y: y});
        }
    }, []);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    }

    const selectPokemon = () => {
        return "trubbish";
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

    const checkLocations = (x, y, actualLoc) => {
        let selectedChar = new Character(actualLoc.xmin,
                                        actualLoc.xmax, 
                                        actualLoc.ymin,
                                        actualLoc.ymax);

            if(selectedChar.checkIfValidX(x) && selectedChar.checkIfValidY(y)) {
                return true;
            }
            else {
                return false;
            }
    }

    return (
        <>
            <div id="Game">
            <img src={pokehunt_2} alt="Many pokemon in a Where's Wally style" id="game-image"></img>
            <div className ="cleffa-location"></div>
            <div className ="graveler-location"></div>
            <div className ="trubbish-location"></div>
            <div className ="togepi-location"></div>
            <Selection visible={isMenuVisible} toggleMenu={toggleMenu} x={x} y={y} visibleChars={foundChars}/>
            </div>
            
        </>
    );
}

  export default Game;