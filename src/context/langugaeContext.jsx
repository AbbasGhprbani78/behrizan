import { createContext, useState, useContext } from "react";

const ChangeLanContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en")

    return (
        <ChangeLanContext.Provider value={{ language, setLanguage }}>
            {children}
        </ChangeLanContext.Provider>
    )
}


export const useMyContext = () => {
    return useContext(ChangeLanContext);
};
