import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInitialProducts } from '../../redux/actions/productActions'
import * as Io from 'react-icons/io';
import './headerStyles.modules.css';

const Header = () => {
  const dispatch = useDispatch()
  const itemList = useSelector((state) => state.cart);
  const { prods } = useSelector((state) => state.store);
  useEffect(() => {
    dispatch(getInitialProducts());
    console.log("rerender")
  }, [prods])

  if (!itemList) return null

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
          <li className='navItem'>
            <Link to="addNewItem">
              <p>Add item to stock</p>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header