import ProductPropType from "./ProductsPropType";
import './ProductDisplay.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
 





const Product:React.FC<{propduct:ProductPropType}> = (prop)=>
{
    
    const Navigate=useNavigate()
    const {
        id,
        title,
        description,
        discountPercentage,
        brand,
        category,
        rating,
        price,
        stock,
        thumbnail,
        images 
      }=prop.propduct;
     
      const handleClick=()=>{

        Navigate(`/Full-Info`,{state:prop.propduct})
      }
      
//My cart Button
 function handleMyCartButton()
 {

    Navigate(`/my-cart`)
      
 }

function handleAddToCart()
{
    const localArr:ProductPropType[]=JSON.parse(localStorage.getItem('arr')|| '[]');

  
    console.log(typeof(localArr));
   let bol=true
   const keys=Object.keys(localArr)
    keys.forEach((key)=>{
        const localObj=localArr[key as keyof typeof localArr]
       
        if(prop.propduct.id===localObj.id)
        {
            
            bol=false
        }
        
        
    })
    if(bol)
    {
        localArr.push(prop.propduct)
    }
    localStorage.setItem('arr',JSON.stringify(localArr))
        
        

}


    return(
        <>
        <div className="cartButton"><button onClick={handleMyCartButton}>My Cart</button></div>
        <div className="display">
            <div className="thumbnail">
                <button onClick={handleClick}><img src={thumbnail}  /></button>
            </div>
            <div className="info">
                <p><b>Brand:</b>{brand}</p>
                <p><b>Title:</b>{title}</p>
                <p><b>category:</b>{category}</p>
                <p><b>Description :</b>{description}</p>
                <p><b>Price:</b>{price}$</p>
                <p><b>Discount :</b>{discountPercentage}%</p>
                <p><b>rating(5):</b>{rating}*</p>
                <p><b> In Stock:</b>{stock}</p>
                 <div className="button"><button onClick={handleAddToCart}>Add To Cart</button></div>
            </div>
             
        </div>

        </>
    )
}

export default Product ;