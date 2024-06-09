import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from './router';
import Header from './Components/modules/Header/Header'
import i18n from './i18n'
import { useMyContext } from './context/langugaeContext';
import { useEffect } from 'react';
import './App.css'
import Footer from './Components/modules/Footer/Footer';

export const IP = "https://apiqmancafe.ariisco.com"
function App() {

  const router = useRoutes(routes)
  const { language, setLanguage } = useMyContext();
  const location = useLocation();

  useEffect(() => {
    const mainLanguage = localStorage.getItem("language");
    if (mainLanguage) {
      i18n.changeLanguage(mainLanguage)
      setLanguage(mainLanguage)
    }
  }, [language])




  return (
    <>
      <div className={`conatainer-project ${language === "en" ? "ltr-font" : "rtl-font"}`}>
        {router}
      </div>
    </>
  )
}

export default App
