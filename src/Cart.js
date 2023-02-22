import React, { useContext } from 'react';
import { addtocartcontext } from './App';

const Cart = () => {

  const { cart,  reducequantity, addquantity } = useContext(addtocartcontext);

  const totalprice = cart.reduce((price,items)=>price+items.quantity * items.price, 0);

  const buttonstyle = {
    fontSize: '15px',
    borderRadius: '10px',
    color: 'black',
    backgroundColor: 'lightcyan',
    fontWeight: 'Bold'
  }

  return (
    <div >
      {cart.map((items) => (
        <>
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={items.image} /></div>
          <h6 className="card-title">{items.title}</h6>
          <h1 className="card-title">{Math.round(items.price)}</h1>
          <button onClick={()=> {addquantity(items)}} style={buttonstyle}>+</button>
          <h5 className="card-title">{items.quantity}</h5>
          <button onClick={()=>{reducequantity(items)}} style={buttonstyle}>-</button>
          <button >Remove</button>
        </>
      ))}

      <h1>Grand Total : {Math.round(totalprice)}</h1>
    </div>
  )
}

export default Cart