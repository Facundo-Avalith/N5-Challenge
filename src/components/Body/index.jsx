import React from 'react';
import { useSelector } from 'react-redux';

import Card from './productCard/index';
import './bodyStyles.modules.css';

const Body = () => {

  const { prods } = useSelector((state) => state.store);

  const { products } = prods;

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
 {
          products.map((product, i) => {
            return <Card product={product} index={i} key={i} />
          })
        }
         */