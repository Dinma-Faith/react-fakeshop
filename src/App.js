// import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Containers/Header";
import ProductDetails from "./Containers/ProductDetails";
import ProductListing from "./Containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productid"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
