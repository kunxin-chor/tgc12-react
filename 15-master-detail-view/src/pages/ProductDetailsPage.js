import React from 'react';
import ProductContext from '../ProductContext';

export default class ProductDetailsPage extends React.Component {
    state ={
        productID:0
    }

    static contextType = ProductContext;

    componentDidMount() {
        // let {productID} = this.props.match.params;
        let productID = this.props.match.params.productID;
        this.setState({
            'productID': productID
        })
    }
    render() {
        let product = this.context.getProductByID(this.state.productID);
        console.log(product);
        return (
            <React.Fragment>
                <h1>Product Details</h1>
                { product ? (
                    <ul>
                        <li>ID: {product.id}</li>
                        <li>Name: {product.product_name}</li>
                        <li>Cost: {product.cost}</li>
                    </ul>

                ) : null}
            </React.Fragment>
        )
    }

}