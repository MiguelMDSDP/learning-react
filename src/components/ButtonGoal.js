import React from 'react'

export default class ButtonGoal extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.scoreGoal();
    }

    render() {
        return(
            <button onClick={this.handleClick.bind(this)}>Goal!</button>
        );
    }
}