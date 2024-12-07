import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const ContextValue = {

    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider