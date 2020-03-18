import React from 'react';

import ButtonGoal from './ButtonGoal'

export default class Team extends React.Component {
    render() {
        return (
            <div className="hero">
                <div style={{"textAlign": "center"}}>
                    <h1 className="title">{this.props.name}</h1>
                    <h2 className="subtitle">{this.props.goals}</h2>
                </div>
                <ButtonGoal scoreGoal={this.props.scoreGoal} className="subtitle"/>
            </div>
        );
    }
}