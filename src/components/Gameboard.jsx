import { useState, useContext } from "react";
import Card from "./card";
import { DataContext } from "../context/context";

export default function GameBoard() {
  console.log("checking");
  const [cards, setCards] = useState([...Array(12)].map((_, i) => i));
  const { game } = useContext(DataContext);
  function shuffleCards(id) {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
    game.playerMove[id];
  }
  return (
    <div id="game-board">
      {cards.map((id) => (
        <Card key={id} id={id} onClick={(id) => shuffleCards(id)} />
      ))}
    </div>
  );
}
