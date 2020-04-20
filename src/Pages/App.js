import React from 'react';
import ProductList from 'Pages/ProductList'
import ProductDetails from 'Pages/ProductDetails'
import ShoppingCart from 'Pages/ShoppingCart'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ProductList/>
        </Route>
        <Route path="/details/:itemId" component={ProductDetails} />
        <Route path="/shoppingCart">
          <ShoppingCart/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App