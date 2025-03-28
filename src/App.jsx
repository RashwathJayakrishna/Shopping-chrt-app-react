import { createContext, useState } from 'react'

import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ViewCart from './components/ViewCart'

import { cartContext } from './components/CartContext'

function App() {


  const [cart,setCart]=useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>
          <BrowserRouter>
    <Header  />
    <div className="container">
<Routes>
  <Route path="/" element={<Home  />} />
  <Route path="/Cart" element={<ViewCart />} />
</Routes>
    </div>
    </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
