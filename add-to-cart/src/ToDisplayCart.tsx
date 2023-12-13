import ProductPropType from "./ProductsPropType";
import './ToDisplayCart.css'

const ToDisplayCart:React.FC<{product:ProductPropType}>=(prop)=>
{
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
      }=prop.product;
    return(
        <>
        <div className="myCartDisplay">
            <div className="thumbnail">
               <img src={thumbnail} alt="" />
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
                 
        <>
        {
                        images.map((val)=>{
                            <img src={val} alt=""  height={100} width={100}/>
                        })
                    }
                    
        </>
            </div>
             
        </div>

        </>
    )
}

export default ToDisplayCart