// import "./App.css";
import PointsTable from "./components/pointsTable";
import Rules from "./components/rules";
import GameBoard from "./components/Gameboard";
function App() {
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
        <button>Start</button>
        <button>Hard</button>
      </div>
    </div>
  );
}

export default App;
