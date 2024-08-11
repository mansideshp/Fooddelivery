import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/order' element = {<Placeorder/>}/>

      </Routes>
    </div>
  )
}

export default App