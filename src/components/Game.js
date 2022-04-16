import { useState, useEffect } from "react";
import './Game.css';
//import pokehunt_1 from "../assets/images/pokehunt-1.png"
import pokehunt_2 from "../assets/images/pokehunt-2.png"

function Game() {
    const [clickedPos, setClickedPos] = useState({
        x: 0,
        y: 0
    })


    useEffect(() => {
        const image = document.getElementById("game-image");
        image.addEventListener("mousedown", (e) => {
        getClickPosition(image, e);
        });
        
        const getClickPosition = (image, event) => {
            const rect = image.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            setClickedPos({
                x: x,
                y: y
            })
        }
        
    });


    return (
        <>
            <p>You clicked on {clickedPos.x}, {clickedPos.y} </p>
            <div className="Game">
            <img src={pokehunt_2} alt="Many pokemon in a Where's Wally style" id="game-image"></img>
            <div className ="cleffa-location"></div>
            <div className ="graveler-location"></div>
            <div className ="trubbish-location"></div>
            <div className ="togepi-location"></div>
            </div>
        </>
    );
}

  export default Game;