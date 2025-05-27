import React, { createContext, useState, useEffect } from "react";

const PointsContext = createContext();

const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(() => {
    const storedPoints = localStorage.getItem("points");
    return storedPoints ? JSON.parse(storedPoints) : null;
  });

  useEffect(() => {
    if (points) {
      localStorage.setItem("points", JSON.stringify(points));
    } else {
      localStorage.removeItem("points");
    }
  }, [points]);

  const contextValue = {
    points,
    setPoints,
  };

  return (
    <PointsContext.Provider value={contextValue}>{children}</PointsContext.Provider>
  );
};

export { PointsContext, PointsProvider };