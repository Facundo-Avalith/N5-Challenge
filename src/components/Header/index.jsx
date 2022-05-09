import React from 'react';
import * as Io from 'react-icons/io';
import { Link } from 'react-router-dom';
import './headerStyles.modules.css';

const Header = () => {
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
            <Link to="/cart" ><p>Mi carrito <Io.IoIosCart className='img' size={30} /></p></Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header