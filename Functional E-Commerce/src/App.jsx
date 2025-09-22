import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Routing from '../utils/Routing/Routing'
import './App.css'
import Home from './Components/Home'
import Detail from './Components/Detail'

function App() {
    const { search , pathname } = useLocation();
    
 
  return (
    <div className='w-100vw h-100vh flex'>

      {(pathname != "/" || search.length > 0) && (

        <Link to={'/'} className='absolute left-[17%] top-[2%] px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition'>Home</Link>

      )}
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productDetail/:id' element={<Detail/>}/>
            
          
        </Routes>


    
    </div>
  )
}

export default App
