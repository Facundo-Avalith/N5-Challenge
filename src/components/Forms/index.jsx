import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../helpers/useForm";
import { update_stock } from "../../redux/actions/productActions";

const Forms = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange] = useForm({
    name: "",
    amount: 0,
    price: 0,
  });
  const { name, amount, price } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(update_stock(formValues))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <label>Product name</label>
        <input
          type="number"
          placeholder="Cantidad del producto"
          name="amount"
          value={amount}
          onChange={handleInputChange}
        />
        <label>Product amount</label>
        <input
          type="text"
          placeholder="Precio del producto"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <label>Product price</label>
        <button onSubmit={handleSubmit}> Add item</button>
      </form >
    </div>
  );
};

export default Forms;
