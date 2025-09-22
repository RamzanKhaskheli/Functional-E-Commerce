import React, { useContext } from 'react'
import { productContext } from '../../utils/Context/context'
import { Link, useLocation } from 'react-router-dom';

function Nav() {

    const [product] = useContext(productContext);
   

    // console.log(product)
    let distinctCategory = product && product.reduce((acc,cv)=>[...acc,cv.category],[]);
    distinctCategory = [...new Set(distinctCategory)];
    // console.log(distinctCategory);

    const color = () =>{
      return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
    }


  return (
     <div className="w-[15%] h-[97vh] p-4 bg-white shadow ">
      <button className="w-full mb-6 px-4 py-2 text-blue-500 border border-blue-300 rounded-lg hover:bg-blue-50">
        Add New Product
      </button>

      <h2 className="text-xl font-semibold mb-4">Category Filter</h2>
      <div className="space-y-3">

        {distinctCategory.map((c,i)=>(

          
          
          <Link key={i} to={`/?category=${c}`} className="flex items-center">
          <span style={{backgroundColor: color()}} className="w-3 h-3 rounded-full  mr-2"></span>
            {c}
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Nav