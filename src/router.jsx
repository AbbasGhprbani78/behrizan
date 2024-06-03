import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import MainMenu from './Pages/MainMenu/MainMenu'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import Story from './Pages/Story/Story'
import NotFound from './Pages/NotFound/NotFound'

const routes = [
    { path: "/", element: <Home /> },
    { path: "/categorymenus", element: <Menu /> },
    { path: "/menu/:name/:id", element: <MainMenu /> },
    { path: "/product/:productname/:id", element: < Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/aboutus", element: <Story /> },
    { path: "/*", element: <NotFound /> }

]
export default routes

