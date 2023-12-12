import { useEffect, useState } from "react";
import ProductPropType from "./ProductsPropType";
import axios from "axios";
import './FunnInfo.css'
import { useLocation, useParams } from "react-router-dom";
import Product from "./ProductDisplay";

const FullInfo=()=>
{
    const location =useLocation();
    const product=location.state;
    console.log(product);
    
    
  return(
    <>
    <Product propduct={product} />
    
    {
        product.images.map((val:string)=>
        (
            
           ( <img src={val} alt=""  height={200} width={200} className="moreImages"/>)
        ))
    }
    </>
  )
}

export default FullInfo