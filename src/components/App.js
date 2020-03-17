import React from 'react';

import Scoreboard from './Scoreboard'

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

export default class App extends React.Component {
    render() {
        return <Scoreboard {...data} />;
    }
}