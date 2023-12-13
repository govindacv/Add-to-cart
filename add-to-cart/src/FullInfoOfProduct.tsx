import { useNavigate } from "react-router-dom";
import ProductPropType from "./ProductsPropType";
import './FullInfoOfProduct.css'
const FullInfoOfproduct:React.FC<{product:ProductPropType}>=(prop)=>
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
      }=prop.product;
      function handleAddToCart()
{
    const localArr:ProductPropType[]=JSON.parse(localStorage.getItem('arr')|| '[]');

  
    console.log(typeof(localArr));
   let bol=true
   const keys=Object.keys(localArr)
    keys.forEach((key)=>{
        const localObj=localArr[key as keyof typeof localArr]
       
        if(prop.product.id===localObj.id)
        {
            
            bol=false
        }
        
        
    })
    if(bol)
    {
        localArr.push(prop.product)
    }
    localStorage.setItem('arr',JSON.stringify(localArr))
        
        

}
function handleMyCartButton()
{

   Navigate(`/my-cart`)
     
}

      return(
        <>
        <div className="cartButton"><button onClick={handleMyCartButton}>My Cart</button></div>
        <div className="displayOfFullInfo">
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
                 <div className="button"><button onClick={handleAddToCart}>Add To Cart</button></div>
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


export default FullInfoOfproduct