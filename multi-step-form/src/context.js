import React,{ useContext, useState } from "react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [summary, setSummary] = useState({plan: 'Arcade', mode: 'mon'});
    return(
        <StoreContext.Provider
            value={{
                step,
                summary,
                setStep,
                setSummary
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export const useGlobalContext = () => useContext(StoreContext);

export { StoreContext, StoreProvider};