import Header from "./components/Header.js"
import Game from "./components/Game.js"
import { useState } from "react"

function App() {
  
  const [beginGame, setBeginGame] = useState(false);

  const beginGameClicked = () => {
    //Spins the pokeball twice to give the feeling of the game "loading"
    let btn = document.getElementById("beginGameBtn")
    btn.classList.toggle("spin")
    setTimeout(() => setBeginGame(true), 2000);
  }

  const restartGame = () => {
    setBeginGame(false);
  }

  return (
    <div className="App">
      <Header name="WhereMon" showRestart={beginGame} restartGame={() => restartGame()}/>

      {beginGame
        ? <>
            <Game />
          </>
        : <button id="beginGameBtn" onClick={() => beginGameClicked()}></button>
      }

    </div>
  );


}

export default App;
