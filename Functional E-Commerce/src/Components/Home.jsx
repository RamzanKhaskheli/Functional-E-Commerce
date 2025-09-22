import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import Context, { productContext } from '../../utils/Context/context'
import axios from '../../utils/Context/Axios';

function Home() {
    const [Products] = useContext(productContext);
     const {search} = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

   const [filteredProduct, setfilteredProduct] = useState(null);

   const getproductcategory = async () =>{
    try {
        const {data} = await axios.get(`/products/category/${category}`)
        setfilteredProduct(data)
    }catch (error) {
      console.log(error)
    }
   };
    
  useEffect(() => {
    if(!filteredProduct || category == "defined")
          setfilteredProduct(Products);

  if (category && category !== "undefined") {
    getproductcategory();
  } else {
    setfilteredProduct(Products);
  }
}, [category, Products]);
   
    
    
  return (
    <>
    {Products ? (<><Nav/> <div className='h-[97vh] w-[85%] p-10 pt-[5%] flex  flex-wrap gap-5 overflow-x-auto'>

       {filteredProduct && filteredProduct.length > 0 ? (
    filteredProduct.map((p) => (
      <div
        key={p.id}
        className="w-[18%] h-[35vh] shadow rounded p-4 flex flex-col items-center"
      >
        <Link to={`/productDetail/${p.id}`}>
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-[20vh] object-contain"
          />
        </Link>
        <h2 className="mt-2 font-semibold text-center text-sm">{p.title}</h2>
        <p className="text-gray-600">${p.price}</p>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No products found</p>
  )}



    
    </div></>) : <h1>Loading</h1>
    
    }
    </>
      
  )
}

export default Home