import ProductPropType from "./ProductsPropType";
import './ProductDisplay.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DB from "./DB";



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
    const database:{}={}
      const handleClick=()=>{

        Navigate(`/Full-Info`,{state:prop.propduct})
      }

 const handleMyCartButton=()=>
 {

 }
const addToCart=()=>
{
    Navigate(`/added-to-cart`,{state:prop.propduct})
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
                 <div className="button"><button onClick={addToCart}>Add To Cart</button></div>

            </div>
            <table>
                <tr>
                    <td>
                    <>
                    {
                        images.map((val)=>{
                            <img src={val} alt=""  height={100} width={100}/>
                        })
                    }
                    
                    </>
                    </td>
                </tr>
            </table>
        </div>

        </>
    )
}

export default Product ;