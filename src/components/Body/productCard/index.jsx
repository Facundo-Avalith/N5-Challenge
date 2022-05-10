import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Io from 'react-icons/io';
import { add_product_to_cart } from '../../../redux/actions/cartActions';
import './cardStyles.modules.css';

const Card = ({ product, index }) => {
  const { name, price, amount, id } = product;
  const { prods } = useSelector((state) => state.store);
  const { products } = prods;
  const dispatch = useDispatch();
  const [productAmount, setProductamount] = useState(1);

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
    if (products[id - 1].amount >= productAmount) {
      dispatch(add_product_to_cart(product, productAmount))
    }
  }
  return (
    <div className='cardContainer'>
      <div className='cardTitle'>
        <h3>{name}</h3>
      </div>
      <div className='cardContent'>
        <h4>Precio: ${price}</h4>
        <h4>Stock: {amount}</h4>
      </div>
      <div className='cardButtons'>
        <div className='actionButtons'>
          <Io.IoIosAdd className='add' onClick={incrementAmount} />
          <h3>{productAmount}</h3>
          <Io.IoIosRemove className='add' onClick={decrementAmount} />
        </div>
        <div className='addButton'>
          <button className="button" onClick={() => { handleSubmit(index) }}>
            <p>Agregar al carrito</p>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card