import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Io from 'react-icons/io';
import { add_product_to_cart } from '../../../redux/actions/cartActions';

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const [productAmount, setProductamount] = useState(1);

  const { name, price, amount } = product;

  const incrementAmount = () => {
    if (productAmount < amount) {
      setProductamount(productAmount + 1);
    }
  }
  const decrementAmount = () => {
    if (productAmount > 1) {
      setProductamount(productAmount - 1);
    }
  }
  const handleSubmit = () => {

    dispatch(add_product_to_cart(product, productAmount))

  }

  return (
    <div className='cardContainer'>
      <div className='cardTitle'>
        <h3>Producto: {name}</h3>
      </div>
      <div className='cardContent'>
        <h4>Precio: ${price}</h4>
        <h4>Cantidad: {amount}</h4>
      </div>
      <div className='cardButtons'>

        <Io.IoIosAdd className='add' onClick={incrementAmount} />
        <h3>{productAmount}</h3>
        <Io.IoIosRemove className='remove' onClick={decrementAmount} />
        <button className="button" onClick={handleSubmit}>
          <p>Agregar al carrito</p>
        </button>

      </div>
    </div>
  )
}

export default Card