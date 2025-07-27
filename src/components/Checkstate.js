import { createContext, useContext, useState } from "react"; 
import { useNavigate } from "react-router-dom";

    const knowsAllStates = createContext();

    export const UseCheckState = ({children}) => {
        const [loggedIn, setLoggedIn] = useState(false);
        const navigate = useNavigate();

        const logIn = () => {
            setLoggedIn(true);
            navigate("/");
        };

        const logOut = () => {
            setLoggedIn(false);
            navigate("/");
        };

    

    return(
    <knowsAllStates.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </knowsAllStates.Provider>



    );
};


export const UseAllStates = () => useContext(knowsAllStates);
