import React from "react";
import Body from "../../components/Body/index"
import './appStyles.modules.css';

const MainPage = () => {

  return (
    <div className="mainPage">
      <div className='title'> <h1> Stock</h1></div>
      <Body />
    </div>
  )
};

export default MainPage;
