import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [openedHeader, setOpenedHeader] = useState(false);
  const [serviceNewData, setServiceNewData] = useState(null);

  const setFetchedServiceData = (newData) => {
    setServiceNewData(newData);
  };

  const setHeaderOpened = () => {
    setOpenedHeader(!openedHeader);
  };

  return (
    <DataContext.Provider
      value={{
        serviceNewData,
        setFetchedServiceData,
        setHeaderOpened,
        openedHeader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
