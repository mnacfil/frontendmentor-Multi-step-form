import React,{ useContext, useState } from "react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    return(
        <StoreContext.Provider
            value="Hello"
        >
            {children}
        </StoreContext.Provider>
    )
}

export const useGlobalContext = () => useContext(StoreContext);

export { StoreContext, StoreProvider};