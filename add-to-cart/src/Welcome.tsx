import './Welcome.css'

import {useNavigate  } from "react-router-dom";
const WelcomeCompnent:React.FC= ()=>
{
    const Navigate = useNavigate()
    const handleClick =()=>
    {
        Navigate(`/product`)
    }
    return (

        <div className="homePage">
            <h1>Welcome To GTA </h1>
            
            <h2>Shop</h2>
        <button onClick={handleClick}>check out our store</button>
        </div>
    )
}

export default WelcomeCompnent
