import { useState, useContext } from "react";
import Card from "./card";
import { DataContext } from "../context/context";

export default function GameBoard() {
  const [cards, setCards] = useState([...Array(12)].map((_, i) => i));
  const { Game, setPoints } = useContext(DataContext);
  function shuffleCards(id) {
    if (Game.checkProgress()) {
      setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
      Game.playerMove(id);
      let points = Game.getPoints();
      setPoints(points);
      // console.log(points);
    }
  }
  return (
    <div id="game-board">
      {cards.map((id) => (
        <Card key={id} id={id} onClick={() => shuffleCards(id)} />
      ))}
    </div>
  );
}
