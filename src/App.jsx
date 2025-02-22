// import "./App.css";
import { useContext, useState } from "react";
import PointsTable from "./components/pointsTable";
import Rules from "./components/rules";
import GameBoard from "./components/Gameboard";
import { DataContext } from "./context/context";
import { game } from "./components/game";

function App() {
  const [loading, setLoading] = useState(false);
  const { setPokeIdList, setGame } = useContext(DataContext);

  async function getImage(id) {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await promise.json();
    const imgUrl = data.sprites.front_default;

    return imgUrl;
  }

  let handleClick = async () => {
    const Game = new game();
    Game.setProgress();
    setGame(Game);

    setLoading(true);
    const numbers = new Set();
    while (numbers.size < 12) {
      numbers.add(Math.floor(Math.random() * 800) + 1);
    }

    const pokeImages = await Promise.all([...numbers].map(getImage));

    setPokeIdList(pokeImages);
    setLoading(false);
  };
  return (
    <div id="game">
      <div id="game-heading">
        <div id="main-heading">
          <h1>Memory-Game</h1>
          <PointsTable />
        </div>
        <Rules />
      </div>

      <GameBoard />
      <div id="buttons">
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Loading..." : "Start"}
        </button>
        <button>Hard</button>
      </div>
    </div>
  );
}

export default App;
