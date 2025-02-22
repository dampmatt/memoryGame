import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DataContext } from "../context/context";

export default function Card({ id, onClick }) {
  const { pokeIdList } = useContext(DataContext);
  const [bgImage, setBackgroundImage] = useState("");

  // Update background image when id or pokeIdList changes
  useEffect(() => {
    if (pokeIdList && pokeIdList[id]) {
      setBackgroundImage(pokeIdList[id]);
    }
  }, [id, pokeIdList]);

  return (
    <div
      className="cards"
      id={id}
      onClick={onClick}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
    ></div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
