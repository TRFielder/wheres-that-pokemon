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
        : <button id="beginGameBtn" onClick={() => beginGameClicked()}></button>
      }

    </div>
  );


}

export default App;
