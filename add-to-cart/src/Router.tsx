import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./FullProductList";
import WelcomeCompnent from "./Welcome";
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
                    element:<ProductList/>
                }
            ]

        }
    ]
)

export default AppRoute
