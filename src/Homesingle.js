import React, { useContext } from 'react'
import { addtocartcontext } from './App'



const Homesingle = ({ items }) => {


    const { addtocart } = useContext(addtocartcontext);

    const buttonstyle = {
        fontSize: '15px',
        borderRadius: '10px',
        color: 'black',
        backgroundColor: 'lightcyan',
        fontWeight: 'Bold'
    }


    return (
        <div key={items.id}>
            <div className="card" style={{ width: '18rem', marginTop: '15px', padding: '15px', backgroundColor: 'aliceblue' }}>
                <img src={items.image} className="card-img-top" alt={items.title} />
                <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <h1 className="card-title">Rs.{Math.round(items.price)}</h1>
                    <button onClick={() => { addtocart(items) }} style={buttonstyle}>Add to cart</button>
                    <p className="card-text">{items.description}</p>
                </div>
            </div>
        </div>


    )
}

export default Homesingle