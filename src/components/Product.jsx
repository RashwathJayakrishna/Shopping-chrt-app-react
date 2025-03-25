import React from 'react'
import './Product.css'
const Product = ({product}) => {

    const name=product.name.length > 21 ?product.name.substring(0,20)+".." : product.name;
  return (
    <div className='product'>
        <div className="img">
<img src={product.pic} alt={product.name} />
        </div>
        <div className="details">

        
        <h3>{name}</h3>
        <p>Price Rs:{product.amt}</p>
        <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
