import "../styles/Selection.css";

function Selection() {
    //Pokemon are: Trubbish, Cleffa, Graveler, Togepi

    return(
        <>
            <div id="selectionMenu">
                <ul id="pokemonList">
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png" alt="Trubbish official art"></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png" alt="Cleffa official art"></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png" alt="Graveler official art"></img>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png" alt="Togepi official art"></img>
                    </li>
                </ul>
            </div>
        </>
    )
}

Selection();

export default Selection;