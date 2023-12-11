import ProductPropType from "./ProductsPropType";
import './ProductDisplay.css'

const Product:React.FC<{propduct:ProductPropType}> = (prop)=>
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
      }=prop.propduct;

    return(
        <>
        
        <div className="display">
            <div className="thumbnail">
                <img src={thumbnail} alt="" />
            </div>
            <div className="info"></div>
        </div>

        </>
    )
}

export default Product ;