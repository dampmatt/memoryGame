import "./App.css";
import PointsTable from "./components/pointsTable";

function App() {
  return (
    <div id="#game-heading">
      <div id="#main-heading">
        <h1>memory game</h1>
        <PointsTable />
      </div>
      <div id="rules">
        <rules />
      </div>
    </div>
  );
}

export default App;
