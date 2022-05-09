import React from 'react';
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import PageRoutes from "../routes/Router";

const App = () => {
  return (
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  )
}

export default App