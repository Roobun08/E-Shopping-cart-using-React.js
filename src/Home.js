import React from 'react'
import Homesingle from './Homesingle'
import { items } from './Items'

const Home = () => {
    return (
        <div>
            {items.map((items) => (<Homesingle key={items.id} items={items} />))}
        </div>
    )
}

export default Home