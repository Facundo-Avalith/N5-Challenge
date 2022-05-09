import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialProducts } from '../../redux/actions/productActions';


import Card from './productCard/index';
import './bodyStyles.modules.css';

const Body = () => {
  const dispatch = useDispatch();
  const { prods } = useSelector((state) => state.store);
  const { products } = prods;

  useEffect(() => {
    dispatch(getInitialProducts());
  }, [])

  if (!products) return null;

  return (
    <div className="bodyWrapper">
      <div className='accordeonWrapper'>
        {
          products.map((product, i) => {
            return <Card product={product} index={i} key={i} />
          })
        }
      </div>
    </div>
  )
}

export default Body

/*
 */