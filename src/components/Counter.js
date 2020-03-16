import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <div>
                    <button onClick={this.decrement.bind(this)}>-</button>
                    <button onClick={this.increment.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}