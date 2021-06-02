import React from "react"

export default class Fruit extends React.Component {
    state = {
        nameOfFruit:""
    }

    style = {
        "height": "60px",
        "backgroundColor":"aliceblue",
        "width":"120px"
    }

    selectApple = () => {
        this.setState({
            nameOfFruit:"Apples"
        })
    }

    selectBanana = () => {
        this.setState({
            nameOfFruit:"Bananas"
        })
    }

    render() {
        return (
            <React.Fragment>
                <p>The current fruit is {this.state.nameOfFruit}</p>
                <div style={this.style}>{this.state.nameOfFruit}</div>
                <button onClick={this.selectApple}>Apple</button>
                <button onClick={this.selectBanana}>Banana</button>
                <button onClick={()=>{
                    this.setState({
                        nameOfFruit:"Cherries"
                    })
                }}>Cherries</button>
            </React.Fragment>

        )
    }
}