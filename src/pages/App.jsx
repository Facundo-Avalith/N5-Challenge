import React from 'react';
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import PageRoutes from "../routes/Router";

import '../components/scss/globalColors.css'

const App = () => {

  return (
    <div className='appContainer'>
      <Provider store={store}>
        <PageRoutes />
      </Provider>
    </div>
  )
}

export default App