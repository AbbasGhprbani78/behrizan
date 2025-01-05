import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import i18n from './i18n';
import { useMyContext } from './context/langugaeContext';
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/modules/Chat/Chat';

export const IP = "https://qmancafe.com/api/v1/";

function App() {
  const router = useRoutes(routes);
  const { language, setLanguage } = useMyContext();
  const [activeChat, setActiveChat] = useState(false)


  useEffect(() => {
    const mainLanguage = localStorage.getItem("language");
    if (mainLanguage) {
      i18n.changeLanguage(mainLanguage);
      setLanguage(mainLanguage);
    }
  }, [language]);

  
  return (
    <>
      <div className={`${language === "en" ? "ltr-font" : "rtl-font"}
          ${activeChat ? "hiddenback" : "conatainer-project"}`}
      >
        {router}
      </div>
       <Chat setActiveChat={setActiveChat} />
    </>
  );
}

export default App;
