import React from 'react'
import './Products.css'
const Products = () => {
  const price = 500
  const title = 'puma shoe'
  const src = 'data:image/jpeg;base64,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'
  return (
    <div className='product-cart'>
       
        <img src={src} alt="img" />
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default Products