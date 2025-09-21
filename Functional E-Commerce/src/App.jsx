import { Route, Routes } from 'react-router-dom'
import Routing from '../utils/Routing/Routing'
import './App.css'
import Home from './Components/Home'
import Detail from './Components/Detail'

function App() {
 

  return (
    <div className='w-screen h-screen flex'>

      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productDetail' element={<Detail/>}/>
            
          
        </Routes>


    
    </div>
  )
}

export default App
