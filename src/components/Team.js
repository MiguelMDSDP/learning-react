import React from 'react';

import ButtonGoal from './ButtonGoal'

export default class Team extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.goals}</h2>
                </div>
                <ButtonGoal scoreGoal={this.props.scoreGoal} />
            </div>
        );
    }
}