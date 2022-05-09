import React from 'react';
import { useDispatch } from 'react-redux';
import { remove_all_from_cart, remove_one_from_cart } from '../../redux/actions/cartActions';

const Cart = ({ product }) => {
  const dispatch = useDispatch()

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch(remove_all_from_cart(id))
    } else {
      dispatch(remove_one_from_cart(id))
    }
  }

  return (
    <div>
      <h1>Producto: {product.name}</h1>
      <h2>Precio: ${product.price} X {product.amount}</h2>
      <h2>Total producto: ${product.price * product.amount}</h2>
      <button onClick={() => delFromCart(product.id)}>Eliminar un producto</button>
      <button onClick={() => delFromCart(product.id, true)}>Eliminar todos del mismo tipo</button>
    </div>
  )
}

export default Cart