import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { game } from "../components/game";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [pokeIdList, setPokeIdList] = useState([]);
  const [Game, setGame] = useState(new game());

  return (
    <DataContext.Provider
      value={{
        points,
        setPoints,
        pokeIdList,
        setPokeIdList,
        Game,
        setGame,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
DataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate `children` prop
};
