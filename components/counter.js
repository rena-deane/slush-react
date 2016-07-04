import React, { Component } from 'react'

class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {counter: 0}
    }
    addOne(){
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (
            <div>
                <h2>This is my counter: {this.state.counter}</h2>
                <button onClick={this.addOne.bind(this)}>MORE</button>
            </div>
        )
    }
}

export default Counter
