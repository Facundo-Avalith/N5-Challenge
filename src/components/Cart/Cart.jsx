import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove_all_from_cart, remove_one_from_cart } from '../../redux/actions/cartActions';
import './cartStyles.modules.css';

const Cart = ({ product }) => {
  const dispatch = useDispatch()

  const itemList = useSelector((state) => state.cart);
  if (!itemList) return null

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch(remove_all_from_cart(id))
    } else {
      dispatch(remove_one_from_cart(id))
    }
  }


  return (
    <div className='cardContainer'>
      <div className='cardTitle'>
        <h3>{product.name}</h3>
      </div>
      <div className='cardContent'>
        <h4>Precio: ${product.price} X {product.amount}</h4>
      </div>
      <div className='cardButtons'>
        <button className='button' onClick={() => delFromCart(product.id)}>Eliminar un producto</button>
        <button className='button' onClick={() => delFromCart(product.id, true)}>Eliminar todos del mismo tipo</button>
      </div>
    </div>


  )
}

export default Cart
