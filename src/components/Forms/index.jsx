import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../helpers/useForm";
import { update_stock } from "../../redux/actions/productActions";
import './formStyles.modules.scss';

const Forms = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange] = useForm({
    name: "",
    amount: "",
    price: "",
  });
  const { name, amount, price } = formValues;

  const handleSubmit = (e) => {
    console.log(formValues)
    e.preventDefault();

    dispatch(update_stock(formValues))
  }
  return (
    <div className='formContainer'>
      <div className="title">
        <h1> Agregue un producto al stock</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre del producto"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Cantidad del producto"
          name="amount"
          value={amount}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Precio del producto"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <button className="buttonSubmit" onSubmit={handleSubmit}> Agregar al stock</button>
      </form >
    </div>
  );
};

export default Forms;
