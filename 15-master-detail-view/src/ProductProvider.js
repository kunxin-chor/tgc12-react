import ProductContext from "./ProductContext";
import React from "react"

export default class ProductProvider extends React.Component {
    state = {
        products: [
            {
                'id': 1,
                'product_name': 'ACME Anvils',
                'cost': 2000
            },
            {
                'id': 2,
                'product_name': 'ACME Hammer',
                'cost':1500
            },
            {
                'id': 3,
                'product_name': 'ACME Stun Gun',
                'cost': 1200
            }
        ]
    }

    componentDidMount() {
        
    }

    render() {
        const context = {
            products: () => {
                return this.state.products;
            },
            addProduct: (productName, cost) => {
                let id = Math.floor(Math.random() * 10000 + 99999);
                this.setState({
                    'products': [...this.state.products, {
                        'id': id,
                        'product_name': productName,
                        'cost': cost
                    }]
                })
            },
            getProductByID: (productID) => {
                return this.state.products.find( p => p.id == productID)
            }
        }

        return  <ProductContext.Provider value={context}>
            {this.props.children}
        </ProductContext.Provider>
    }
  
}