import React from 'react'

import Team from './Team'
import MatchInfo from './MatchInfo'

export default class Scoreboard extends React.Component {
    constructor() {
        super();
        this.state = {
            goals_home: 0,
            goals_away: 0,
        }
    }

    scoreGoalHome() {
        this.setState({
            goals_home: this.state.goals_home + 1,
        });
    }

    scoreGoalAway() {
        this.setState({
            goals_away: this.state.goals_away + 1,
        });
    }

    render() {
        const {matchinfo, home, away} = this.props;

        const stylesheet = {
            float: "left",
            "marginRight": "20px",
        };

        return (
            <div>
                <div style={stylesheet}>
                    <h3>Home</h3>
                    <Team
                        {...home}
                        goals={this.state.goals_home}
                        scoreGoal={this.scoreGoalHome.bind(this)}
                    />
                </div>

                <div style={stylesheet}>
                    <MatchInfo {...matchinfo} />
                </div>

                <div style={stylesheet}>
                    <h3>Away</h3>
                    <Team
                        {...away}
                        goals={this.state.goals_away}
                        scoreGoal={this.scoreGoalAway.bind(this)}
                    />
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}