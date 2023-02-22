import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Header from './Header'
import Home from './Home'


export const addtocartcontext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState();


  const addquantity = (items) =>{
    items.quantity= items.quantity+1;
    setQuantity(items.quantity);
  }

  const reducequantity = (items) =>{
    if(items.quantity>0)
    items.quantity= items.quantity-1;
    setQuantity(items.quantity);
  }
  
  const addtocart = (items) => {
    let present = false;
    cart.forEach((product) => {
      if (items.id === product.id)
        present = true;
    })
    if (present) {
      alert("Item Already in cart..")
      return;
    }
    setCart([...cart, items]);
  }


  return (
    <>
      <addtocartcontext.Provider value={{ addtocart, cart, reducequantity, addquantity }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </addtocartcontext.Provider>
    </>
  )
}

export default App