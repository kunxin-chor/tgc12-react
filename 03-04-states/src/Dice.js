import React from "react"

export default class Dice extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div style={{
                    "border": "1px solid black",
                    "textAlign": "center",
                    "height": "50px",
                    "width": "50px",
                    "color": this.getDiceColor()
                }} onClick={this.rollDice}>
                    {this.state.value}
                </div>
            </React.Fragment>
        )
    }

    state = {
        "value": this.pickRandom()
    }

    rollDice = () => {
        this.setState({
            "value": this.pickRandom()
        })
    }

    pickRandom() {
        return Math.floor(Math.random() * 6 + 1)
    }

    getDiceColor = () => {
        let diceColor = "black";
        if (this.state.value == 1) {
            diceColor = "red"
        }

        if (this.state.value == 6) {
            diceColor = "green"
        }
        return diceColor
    }


}

