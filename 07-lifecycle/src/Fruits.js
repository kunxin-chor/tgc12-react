import React from 'react'
import axios from 'axios'
export default class Fruits extends React.Component {
    state = {
        'fruits': [],
        'numbers': [],
        'loading':false
    }

    // componentDidMount happens after the FIRST render
    async componentDidMount() {
        let response = await axios.get('/fruits.json');
        console.log(response.data);
        this.setState({
            'fruits': response.data
        })
    }

    renderFruitList() {
        // return this.state.fruits.map(f => <li>{f}</li>);
        let jsx = [];
        for (let f of this.state.fruits) {
            jsx.push(<li>{f}</li>)
        }
        return jsx;
    }

    showNumbers = async () => {
        this.setState({
            'loading': true
        })
        let response = await axios.get('numbers.json');
        this.setState({
            'numbers': response.data,
            'loading': false
        })
    }

    render() {
        return <React.Fragment>
            {this.renderFruitList()}
            <button onClick={this.showNumbers}>Show numbers</button>
            { this.state.loading ? <p>Please wait, loading...</p> : null}
            { this.state.numbers.map(n => <li>{n}</li>)}
        </React.Fragment>
    }
}