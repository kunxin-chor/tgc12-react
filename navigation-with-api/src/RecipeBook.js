import React from "react"
import AddNew from "./components/AddNew"
import Listing from "./components/Listing"
import axios from 'axios'

export default class RecipeBook extends React.Component {

    // place the URL to your endpoint here
    // this will vary from Gitpod to Gitpod!
    url = "https://8888-blue-crow-xtgoc6oe.ws-us09.gitpod.io"
    state = {
        // store all the recipes
        data: [
          
        ],
        active:"listing",
        newTitle:"",
        newIngredients:""
    }

    async componentDidMount() {
       this.refresh();
    }

    refresh = async() =>{
        let response = await axios.get(this.url+"/recipes");
        this.setState({
            'data': response.data
        })
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

    addNew = async () => {
        let response = await axios.post(this.url + "/recipes", {
            title: this.state.newTitle,
            ingredients:this.state.newIngredients.split(',')
        })

        this.setState({
            'data': [
                ...this.state.data,
                response.data[0]

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
                    <a className={"nav-link" + (this.state.active === 'listing' ? ' active' : '')}
                       aria-current="page" 
                       href="#"
                       onClick={()=>{
                           this.setActive('listing')
                       }}
                    >Listing</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (this.state.active === 'add' ? ' active' : '')} href="#" onClick={()=>{
                        this.setActive("add")
                    }}>Add New</a>
                </li>
            </ul>
            {this.renderContent()}
        </React.Fragment>)
    }
}