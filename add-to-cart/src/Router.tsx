import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./FullProductList";
import WelcomeCompnent from "./Welcome";
import Product from "./ProductDisplay";
import FullInfo from './FullInfo'
import DB from "./DB";
const AppRoute=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:
            [
                {
                    index:true,
                    element: <WelcomeCompnent/> 
                },
                {
                    path:'/product',
                    index:true,
                    element:<ProductList/>,
                },
                {
                    path:'/added-to-cart',
                    index:false,
                    element:<DB/>
                }
                ,
                {
                    path:'/Full-Info',
                    index:true,
                    element:<FullInfo />
                }
                
            ]
        }
    ]
)

export default AppRoute
