import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { IP } from "../App";

const ChangeLanContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en")
    const [socaial, setSocaial] = useState("");

    useEffect(() => {
        const getSocial = async () => {
            const headers = {
                'Accept-Language': language
            };
            try {
                const response = await axios.get(`${IP}/home/footer/`, { headers })

                if (response.status === 200) {
                    setSocaial(response.data)
                }

            } catch (e) {
                console.log(e)
            }
        }
        getSocial()
    }, [language])


    return (
        <ChangeLanContext.Provider value={{ language, setLanguage, socaial }}>
            {children}
        </ChangeLanContext.Provider>
    )
}


export const useMyContext = () => {
    return useContext(ChangeLanContext);
};
