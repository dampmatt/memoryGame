import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [points, setPoints] = useState(0);

  return (
    <DataContext.Provider value={{ points, setPoints }}>
      {children}
    </DataContext.Provider>
  );
}
DataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate `children` prop
};
