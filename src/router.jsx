import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import MainMenu from './Pages/MainMenu/MainMenu'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'

const routes = [
    { path: "/", element: <Home /> },
    { path: "/categorymenus", element: <Menu /> },
    { path: "/menu/:name/:id", element: <MainMenu /> },
    { path: "/product/:productname/:id", element: < Product /> },
    { path: "/cart", element: <Cart /> },
]
export default routes

