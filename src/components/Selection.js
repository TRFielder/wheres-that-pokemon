import "../styles/Selection.css";
import { useState } from "react"

function Selection(props) {
    //Pokemon are: Trubbish, Cleffa, Graveler, Togepi

    const selectCharacter = (char) => {
        //Checks if position is valid, if returns true then mark the pokemon as found
        props.markAsFound(char);

        props.toggleMenu();
    }

    const position = {
        left: `${props.x+50}px`,
        top: `${props.y-20}px`
    }

    const charFound = (char) => {
        if(props.visibleChars[char]) {
            return {
                opacity: 0.5
            }
        }
        return {opacity: 1.0}
    }

    if(props.visible) {
        return(
            <>
            <div id="selectionMenu" style={position}>
                <ul id="pokemonList">
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png" style={charFound("trubbish")} alt="Trubbish official art" onClick={() => selectCharacter("trubbish")}></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png" style={charFound("cleffa")} alt="Cleffa official art" onClick={() => selectCharacter("cleffa")}></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png" style={charFound("graveler")} alt="Graveler official art" onClick={() => selectCharacter("graveler")}></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png" style={charFound("togepi")} alt="Togepi official art" onClick={() => selectCharacter("togepi")}></img>
                    </li>
                </ul>
            </div>
        </>
        )} else return(
            <>
            </>
        )

}

export default Selection;