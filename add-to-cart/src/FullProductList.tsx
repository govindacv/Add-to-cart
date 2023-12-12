import { useEffect, useState } from "react"
 import axios from 'axios'
import Product from "./ProductDisplay"

const ProductList=()=>
{
    const[product ,setProduct]=useState([])
    const url='https://dummyjson.com/products';
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.log("error is : ", error);
      });
  }, []);

  
    return (
        product.map((value,key)=>(
            <Product  key={key} propduct={value} />
            
        ))
    )




}


export default ProductList