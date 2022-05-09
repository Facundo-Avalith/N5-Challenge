import React from 'react'
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {

  const itemList = useSelector((state) => state.cart);
  const { item } = itemList;
  return (
    <div>
      <h1> Tu carrito de compras</h1>
      <div>
        {item.map((product, index) => {
          console.log(item)
          return (<Cart key={index} product={product} />)
        })}
      </div>
    </div>

  )
}

export default CartPage