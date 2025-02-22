import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [pokeIdList, setPokeIdList] = useState([]);
  const [gameState, setGameState] = useState(0);
  const [gameBoard, setGameBoard] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  return (
    <DataContext.Provider
      value={{
        points,
        setPoints,
        pokeIdList,
        setPokeIdList,
        gameState,
        setGameState,
        gameBoard,
        setGameBoard,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
DataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate `children` prop
};
