import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import MainMenu from './Pages/MainMenu/MainMenu'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
const routes = [
    { path: "/", element: <Home /> },
    { path: "/menu", element: <Menu /> },
    { path: "/menu/:name", element: <MainMenu /> },
    { path: "/product/:productname", element: < Product /> },
    { path: "/cart", element: <Cart /> }
]
export default routes
