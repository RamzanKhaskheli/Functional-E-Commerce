import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Context, { productContext } from '../../utils/Context/context'

function Home() {
    const [Data] = useContext(productContext);
    
    
    
  return (
    <>
    {Data ? (<><Nav/> <div className='h-[97vh] w-[85%] p-10 pt-[1%] flex  flex-wrap gap-5 overflow-x-auto'>

    {Data.map((p)=>{

        return   <div key={p.id} className="w-[18%] h-[35vh] shadow rounded p-4 flex flex-col items-center">
     <Link to={`/productDetail/${p.id}`}>
      <img
        src={p.image}
        alt="Product"
        className="w-40 h-40 object-contain m-auto mb-4 hover:scale-110"
        />
      <p className="text-center text-gray-700 font-medium">
        {p.title}
      </p>
        </Link>
    
   
    </div>



    })}



    
    </div></>) : <h1>Loading</h1>
    
    }
    </>
      
  )
}

export default Home