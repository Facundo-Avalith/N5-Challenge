import React from 'react';
import * as Io from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './headerStyles.modules.css';

const Header = () => {
  const itemList = useSelector((state) => state.cart);
  if (!itemList) return null
  console.log(itemList.item.length)
  return (
    <div className='header'>
      <div className='title'>
        <h1>
          N5 Now Challenge
        </h1>
      </div>
      <div className='navBar'>
        <ul>
          <li className='navItem'>
            <Link to="/" ><p>Productos</p></Link>
          </li>
          <li className='navItem'>
            <Link to="/cart" >
              <p>Mi carrito
                <Io.IoIosCart className='img' size={30} />
              </p>
              <p>
              {itemList
                  ?
                  itemList.item.length
                  :
                  "0"}
              </p>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header