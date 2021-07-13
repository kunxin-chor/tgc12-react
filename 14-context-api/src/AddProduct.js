import React from "react"
import ProductContext from "./ProductContext"

export default class AddProduct extends React.Component {
    state = {
        product_name: "",
        cost: 0
    }

    // the name must strictly match below
    static contextType = ProductContext;

    updateFormField = (e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onAddProduct = () => {
        this.context.addProduct(this.state.product_name, this.state.cost);
    }

    render() {
        return <React.Fragment>
            <div>
                <label>Name:</label>
                <input type="text" 
                    name="product_name"
                    value={this.state.product_name}
                    onChange={this.updateFormField} />
            </div>
            <div>
                <label>Cost:</label>
                <input type="text"
                    name="cost"
                    value={this.state.cost}
                    onChange={this.updateFormField}
                />
            </div>
            <button onClick={this.onAddProduct}>Add Product</button>


        </React.Fragment>

    }
}