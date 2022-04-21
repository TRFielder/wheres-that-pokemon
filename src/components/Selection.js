import "../styles/Selection.css";
import { useState } from "react"

function Selection(props) {
    //Pokemon are: Trubbish, Cleffa, Graveler, Togepi

    const selectCharacter = (char) => {
        console.log(char);
        props.toggleMenu()        
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
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png" style={charFound("trubbish")} alt="Trubbish official art" onClick={() => selectCharacter("Trubbish")}></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png" style={charFound("cleffa")} alt="Cleffa official art" onClick={() => selectCharacter("Cleffa")}></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png" style={charFound("graveler")} alt="Graveler official art" onClick={() => selectCharacter("Graveler")}></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png" style={charFound("togepi")} alt="Togepi official art" onClick={() => selectCharacter("Togepi")}></img>
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