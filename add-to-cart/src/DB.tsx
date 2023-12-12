import { useLocation } from "react-router-dom"
import Product from "./ProductDisplay";
import { useEffect, useState } from "react";

const DB=()=>
{
    const location=useLocation();
       const product=location.state;
        const[dataBase,setDataBase]=useState([])

        useEffect(()=>
        {
            setDataBase(product)
        },[])
        console.log(dataBase);
        
    return(
        <>
            <h1>Added To Cart</h1>
        </>
    )

}

export default DB