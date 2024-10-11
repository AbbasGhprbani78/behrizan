import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from './router';
import Header from './Components/modules/Header/Header'
import i18n from './i18n';
import { useMyContext } from './context/langugaeContext';
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/modules/Chat/Chat';

export const IP = "https://apiqmancafe.ariisco.com";

function App() {
  const router = useRoutes(routes);
  const { language, setLanguage } = useMyContext();
  const location = useLocation();
  const [activeChat, setActiveChat] = useState(false)

  const validRoutes = routes.map((route) => route.path);

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
      {validRoutes.includes(location.pathname) && <Chat setActiveChat={setActiveChat} />}
    </>
  );
}

export default App;
