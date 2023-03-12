import React,{ useContext, useState } from "react";
import { addsOn } from "./constant";
const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [summary, setSummary] = useState({
        plan: { title: '', rate: 0},
        mode: '',
        addsOn: addsOn
    });
    const [info, setInfo] = useState({
        name: {value: '', isEmpty: false},
        email: {value: '', isEmpty: false},
        phone: {value: '', isEmpty: false}
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const newValue = e.target.value;
        setInfo({...info, [name]: {...info[name], value: newValue }});
    }
    // setInfo({...info, [keys[0]]: {...info[keys[0]], isEmpty: true }});

    const checkIfAllFieldFillUp = () => {
        const keys = Object.keys(info);
        for(let i = 0; i < keys.length; i++) {
            setInfo({...info, [keys[i]]: {...info[keys[i]], isEmpty: true }});
        }
    }

    return(
        <StoreContext.Provider
            value={{
                step,
                summary,
                info,
                handleChange,
                setStep,
                setSummary,
                checkIfAllFieldFillUp
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export const useGlobalContext = () => useContext(StoreContext);

export { StoreContext, StoreProvider};