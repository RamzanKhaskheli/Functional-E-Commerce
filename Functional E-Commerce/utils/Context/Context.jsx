import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const productContext = createContext();

const Context = (props) => {

    const getApi = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState([null])

    const getProduct =  ()=>{
        { axios.get(getApi).then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{console.log(err)})}
    }

    useEffect(() => {
      getProduct()
    },[])
    
    
   
  return (
    <productContext.Provider value={product}>

    <div>{props.children}</div>
    </productContext.Provider>
  )
}

export default Context