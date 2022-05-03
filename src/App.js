import Header from "./components/Header.js"
import Game from "./components/Game.js"
import { useState } from "react"
import * as firebase from "./firebaseFuncs.js"

function App() {
  
  const [beginGame, setBeginGame] = useState(false);
  const [time, setTime] = useState("");

  const beginGameClicked = () => {
    //Spins the pokeball twice to give the feeling of the game "loading"
    let btn = document.getElementById("beginGameBtn")
    btn.classList.toggle("spin")
    setTimeout(() => {
      setBeginGame(true)
      firebase.getTimestamp().then(result => {
        setTime(result)
      })
    }, 2000);
  }

  const restartGame = () => {
    setBeginGame(false);
  }

  return (
    <div className="App">
      <Header name="WhereMon" showRestart={beginGame} restartGame={() => restartGame()}/>

      {beginGame
        ? <>
            <Game startTime={time} />
          </>
        : <>
              <div id="selectionMenu" className="beforeGame">
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
          <button id="beginGameBtn" onClick={() => beginGameClicked()}></button>
        </>
      }

    </div>
  );


}

export default App;
