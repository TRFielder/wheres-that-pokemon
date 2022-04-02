import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import demoImage from "./assets/images/allmon.jpg"

function App() {
  return (
    <div className="App">
      Hello World
      <img src={demoImage} alt="Many pokemon in a Where's Wally style" className="game-image"></img>
    </div>
  );
}

export default App;
