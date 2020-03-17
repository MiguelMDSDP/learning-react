import React from 'react';

import ButtonGoal from './ButtonGoal'

export default class Team extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Liverpool</h1>
                    <h2>0</h2>
                </div>
                <ButtonGoal />
            </div>
        );
    }
}