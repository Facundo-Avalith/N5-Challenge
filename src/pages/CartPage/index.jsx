import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

import { clear_cart } from '../../redux/actions/cartActions';
import Cart from '../../components/Cart/Cart';
import './cartStyles.modules.css';

const CartPage = () => {
  const itemList = useSelector((state) => state.cart);
  const { item } = itemList;
  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch(clear_cart())
  }
  if (!item) return null;
  return (
    <div className='cartWrapper'>
     <div className='title'> <h1> Tu carrito de compras</h1></div>
      <div className='cartContainer'>
        {item.map((product, index) => {
          return (<Cart key={index} product={product} />)
        })}
      </div>
      <div className='buttonWrapper'>
      <button className='clearCart' onClick={clearCart}>Eliminar todos los productos</button>
      </div>
    </div>

  )
}

export default CartPage