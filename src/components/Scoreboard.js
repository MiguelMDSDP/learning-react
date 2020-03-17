import React from 'react'

import Team from './Team'
import MatchInfo from './MatchInfo'

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div>
                <div style={{float: "left", "marginRight": "30px"}}>
                    <h3>Home</h3>
                    <Team />
                </div>

                <div style={{float: "left", "marginRight": "30px"}}>
                    <MatchInfo />
                </div>

                <div style={{float: "left", "marginRight": "30px"}}>
                    <h3>Away</h3>
                    <Team />
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}