import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

import { clear_cart } from '../../redux/actions/cartActions';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {
  const itemList = useSelector((state) => state.cart);
  const { item } = itemList;
  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(clear_cart())
  }
  if (!item) return null;
  return (
    <div>
      <h1> Tu carrito de compras</h1>
      <div>
        {item.map((product, index) => {
          return (<Cart key={index} product={product} />)
        })}
        <button onClick={clearCart}>Eliminar todos los productos</button>
      </div>
    </div>

  )
}

export default CartPage