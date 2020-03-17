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
        return (
            <div>
                <div style={{float: "left", "marginRight": "30px"}}>
                    <h3>Home</h3>
                    <Team
                        name={this.props.home.name}
                        goals={this.state.goals_home}
                        scoreGoal={this.scoreGoalHome.bind(this)}
                    />
                </div>

                <div style={{float: "left", "marginRight": "30px"}}>
                    <MatchInfo 
                        stadium={this.props.matchinfo.stadium}
                        date={this.props.matchinfo.date}
                        time={this.props.matchinfo.time}
                    />
                </div>

                <div style={{float: "left", "marginRight": "30px"}}>
                    <h3>Away</h3>
                    <Team
                        name={this.props.away.name}
                        goals={this.state.goals_away}
                        scoreGoal={this.scoreGoalAway.bind(this)}
                    />
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}