import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import Header from './Components/modules/Header/Header'
import i18n from './i18n'
import { useMyContext } from './context/langugaeContext';
import { useEffect } from 'react';
function App() {

  const router = useRoutes(routes)
  const { language, setLanguage } = useMyContext();

  useEffect(() => {
    const mainLanguage = localStorage.getItem("language");
    if (mainLanguage) {
      i18n.changeLanguage(mainLanguage)
      setLanguage(mainLanguage)
    }
  }, [language])

  return (
    <>
      <Header />
      <div className='conatainer-project'>
        {router}
      </div>
    </>
  )
}

export default App
