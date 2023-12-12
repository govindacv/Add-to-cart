import ProductPropType from "./ProductsPropType";
import './ProductDisplay.css'
import { useNavigate } from "react-router-dom";
import React from "react";



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
      const handleCartClick=()=>
      {

      }
    return(
        <>
        
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
                 <div className="button"><button onClick={handleCartClick}>Add To Cart</button></div>

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