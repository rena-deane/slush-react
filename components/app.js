import React, { Component } from 'react'
import Greeter from './greeter'
import Counter from './counter'


class App extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Greeter name="Slushy"/>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>
        )
    }
}

export default App

