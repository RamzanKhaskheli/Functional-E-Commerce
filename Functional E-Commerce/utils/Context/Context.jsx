import React, { createContext, useEffect, useState } from 'react';
import axios from './Axios';

export const productContext = createContext([]);

const Context = (props) => {

    const [product, setProduct] = useState(null)

    const getProduct = async ()=>{
       try {
        const {data} = await axios("/products");
        setProduct(data);
       
       } catch (error) {
        console.log(error);
       }
    };

    useEffect(() => {
      getProduct()
    },[])

    
    
    
   
  return (
    <productContext.Provider value={[product]}>
    <div>{props.children}</div>
    </productContext.Provider>
  )
}

export default Context