import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./FullProductList";
import WelcomeCompnent from "./Welcome";
import Product from "./ProductDisplay";
import FullInfo from './FullInfo'

import CartItem from "./CartItems";
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
                    path:'/Full-Info',
                    index:true,
                    element:<FullInfo />
                }
                ,
                {
                    path:'/my-cart',
                    index:true,
                    element:<CartItem/>
                }
                
            ]
        }
    ]
)

export default AppRoute
