import React from 'react'

const Cart = ({ product }) => {

  return (
    <div>
      <h1>Producto: {product.name}</h1>
      <h2>Precio: ${product.price} X {product.amount}</h2>
      <h2>Total producto: ${product.price * product.amount}</h2>
      <h3></h3>
      <button>Eliminar un producto</button>
      <button>Eliminar todos los productos</button>
    </div>
  )
}

export default Cart