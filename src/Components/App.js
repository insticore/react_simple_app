import React from 'react';
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import ShoppingCart from './ShoppingCart'

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