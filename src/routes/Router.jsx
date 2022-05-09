import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/index";
import CartPage from "../pages/CartPage/index";
import AddItemPage from '../pages/AddItemPage/index'
import Header from '../components/Header';
const PageRoutes = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/addNewItem" element={<AddItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default PageRoutes