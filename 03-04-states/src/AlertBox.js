import React from "react"

export default class AlertBox extends React.Component {
    state = {
        message: this.props.message
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.message}
                </div>
            </React.Fragment>

        )
    }
}