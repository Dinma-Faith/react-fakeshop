import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./Containers/Header";
import ProductDetails from "./Containers/ProductDetails";
import ProductListing from "./Containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<ProductListing/>} />
            <Route
              path="/product/:productid"
              exact
              element={<ProductDetails/>}
            />
            <Route>404 Not Found!</Route>
          </Routes>
      </Router>
      </Provider>

    </div>
  );
}

export default App;
