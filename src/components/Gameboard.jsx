import { useState } from "react";
import Card from "./card";
export default function GameBoard() {
  console.log("checking");
  const [cards, setCards] = useState([...Array(12)].map((_, i) => i));

  function shuffleCards() {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  }
  return (
    <div id="game-board">
      {cards.map((id) => (
        <Card key={id} id={id} onClick={shuffleCards} />
      ))}
    </div>
  );
}
