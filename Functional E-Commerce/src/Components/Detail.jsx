import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../utils/Context/context'
import { useParams } from 'react-router-dom';

function Detail() {

  const [Data] = useContext(productContext)
  const [save, setSave] = useState()
   const { id } = useParams();
  const Product = Data.find(pro => pro.id === parseInt(id));
  
    


  return (
     <div className="min-h-screen flex items-center m-auto justify-center  p-6">
      {
        
         Data ? (<div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left: Product Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img
            src={Product.image} 
            alt="Mens Casual Premium Slim Fit T-Shirt"
            className="w-full h-full object-contain p-6"
          />
        </div>

        {/* Right: Product Details */}

        <div className="flex-1 p-8 mt-[6%] h-full justify-center items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {Product.title}
          </h2>
          <p className="text-gray-300 text-lg mt-2">{Product.category}</p>
          <p className="text-red-500 font-semibold text-lg mt-1">${Product.price}</p>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm">
            {Product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
              Edit
            </button>
            <button className="px-4 py-2 bg-red-100 text-red-500 rounded-lg shadow hover:bg-red-200 transition">
              Delete
            </button>
          </div>
        </div>
      </div>) : <h1>Detail Not Found</h1>
        
      }
    </div>
  )
}

export default Detail