import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [serviceNewData, setServiceNewData] = useState(null);

  const setFetchedServiceData = (newData) => {
    setServiceNewData(newData);
  };

  return (
    <DataContext.Provider value={{ serviceNewData, setFetchedServiceData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
