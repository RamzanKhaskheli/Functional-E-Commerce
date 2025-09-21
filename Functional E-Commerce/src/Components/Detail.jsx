import React from 'react'

function Detail() {
  return (
     <div className="min-h-screen flex items-center m-auto justify-center  p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left: Product Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" 
            alt="Mens Casual Premium Slim Fit T-Shirt"
            className="w-full h-full object-contain p-6"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 p-8 mt-[6%] h-full justify-center items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Mens Casual Premium Slim Fit T-Shirts
          </h2>
          <p className="text-gray-300 text-lg mt-2">men's clothing</p>
          <p className="text-red-500 font-semibold text-lg mt-1">$ 22.3</p>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm">
            Slim-fitting style, contrast raglan long sleeve, three-button henley placket,
            light weight & soft fabric for breathable and comfortable wearing. And Solid
            stitched shirts with round neck made for durability and a great fit for casual
            fashion wear and diehard baseball fans. The Henley style round neckline
            includes a three-button placket.
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
      </div>
    </div>
  )
}

export default Detail