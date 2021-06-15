import React from "react"
import AddNew from "./components/AddNew"
import Listing from "./components/Listing"

export default class RecipeBook extends React.Component {
    state = {
        // store all the recipes
        data: [
            this.createRecipe("Chicken Rice", ["chicken", "chicken broth", "rice"]),
            this.createRecipe("Mashed Potato", ["potato"]),
            this.createRecipe("Walnut Cake", ["walnut", "flour", "sugar"])
        ],
        active:"listing",
        newTitle:"",
        newIngredients:""
    }

    renderContent() {
        if (this.state.active === "listing") {
            return <React.Fragment>
                <Listing data={this.state.data}/>
            </React.Fragment>
        } else if (this.state.active === "add") {
            return <React.Fragment>
                <AddNew data={this.state.data}
                        onUpdateFormField={this.updateFormField}
                        newTitle={this.state.newTitle}
                        newIngredients={this.state.newIngredients}
                        addNew={this.addNew}
                        />
            </React.Fragment>

        }
    }

    addNew = () => {
        this.setState({
            'data': [
                ...this.state.data,
                this.createRecipe(this.state.newTitle,
                                  this.state.newIngredients.split(','))

            ],
            'active':'listing'
        })
    }

    createRecipe(title, ingredients) {
        return {
            id: Math.floor(Math.random() * 99999 + 1000),
            title, ingredients
        }
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    render() {
        return (<React.Fragment>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" 
                       aria-current="page" 
                       href="#"
                       onClick={()=>{
                           this.setActive('listing')
                       }}
                    >Listing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>{
                        this.setActive("add")
                    }}>Add New</a>
                </li>
            </ul>
            {this.renderContent()}
        </React.Fragment>)
    }
}