import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Context, { productContext } from '../../utils/Context/context'

function Home() {
    const Data = useContext(productContext)
  
    
  return (
    <>
    <Nav/>
   <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap gap-5  overflow-y-auto'>

    {Data.map((p)=>{

        return   <div key={p.id} className="w-[18%] h-[30vh] shadow rounded p-4 flex flex-col items-center">
     <Link to="/productDetail">
      <img
        src={p.image}
        alt="Product"
        className="w-40 h-40 object-contain m-auto mb-4 hover:scale-110"
        />
      <p className="text-center text-gray-700 font-medium">
        Lorem ipsum dolor sit amet.
      </p>
        </Link>
    
   
    </div>



    })}



    
    </div>
        </>
  )
}

export default Home