
import './App.css';
import React from 'react';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';
import AddProduct from './AddProduct';

class App extends React.Component {

  state= {
    products:[
      {
        'id': 1,
        'product_name': 'ACME Anvils'
      },
      {
        'id': 2,
        'product_name': 'ACME Hammer'
      },
      {
        'id': 3,
        'product_name': 'ACME Stun Gun'
      }
    ]
  }

  render() {
    const context = {
      products: () => {
        return this.state.products;
      },
      addProduct: (productName, cost) => {
        let id = Math.floor(Math.random() * 10000 + 99999);
        this.setState({
          'products': [ ...this.state.products, {
            'id': id,
            'product_name': productName,
            'cost': cost
          }]
        })
      }
    }

    return (
      <ProductContext.Provider value={context}>
      <div className="App">
        <ProductListing/>
        <AddProduct/>
      </div>
      </ProductContext.Provider>
    );
  }

}

export default App;
