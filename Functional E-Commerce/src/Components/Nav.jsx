import React from 'react'

function Nav() {
  return (
     <div className="w-[15%] h-full p-4 bg-white shadow ">
      <button className="w-full mb-6 px-4 py-2 text-blue-500 border border-blue-300 rounded-lg hover:bg-blue-50">
        Add New Product
      </button>

      <h2 className="text-xl font-semibold mb-4">Category Filter</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-blue-300 mr-2"></span>
          cat 1
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-red-300 mr-2"></span>
          cat 1
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-green-300 mr-2"></span>
          cat 1
        </li>
      </ul>
    </div>
  )
}

export default Nav