import { useContext } from "react";
import { DataContext } from "../context/context";

export default function PointsTable() {
  const { points } = useContext(DataContext);
  return (
    <div id="pointsTable">
      <ul>
        <li>points:{points}</li>
        <li>Total:12</li>
      </ul>
    </div>
  );
}
