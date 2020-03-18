import React from 'react';

import Navigation from '../components/Navigation'
import ScoreboardContainer from '../components/ScoreboardContainer'

const data = {
    matchinfo: {
        stadium: "Anfield/LIV",
        date: "17/03/2020",
        time: "19h",
    },
    home: {
        name: "Liverpool",
    },
    away: {
        name: "Everton",
    }
};

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <ScoreboardContainer {...data} />
            </div>
        );
    }
}