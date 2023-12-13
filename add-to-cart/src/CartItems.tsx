import Product from "./ProductDisplay"
import ProductPropType from "./ProductsPropType"
import ToDisplayCart from "./ToDisplayCart"

const CartItem=()=>
{
    const localObj=JSON.parse(localStorage.getItem('arr')||'[]')
    const localArr:ProductPropType[]=[]
    const keys=Object.keys(localObj)
    keys.forEach((key)=>{
        localArr.push(localObj[key])
    })
    return(
        localArr.map((val)=>
        (
            <ToDisplayCart product={val}/>
        ))
        
    )
}

export default CartItem