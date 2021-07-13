
import './App.css';
import React from 'react';
import ProductProvider from './ProductProvider';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <ProductProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductListingPage />
            </Route>
            <Route exact path="/productDetails/:productID" render={
              props => <ProductDetailsPage {...props} />
            }>
            </Route>
          </Switch>
        </Router>
      </ProductProvider>

    );
  }

}

export default App;
