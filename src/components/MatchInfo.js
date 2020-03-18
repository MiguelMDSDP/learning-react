import React from 'react'

export default class MatchInfo extends React.Component {
    render() {
        return (
            <div className="hero" style={{"textAlign": "center"}}>
                <h2 className="title">{this.props.stadium}</h2>
                <div>
                    <span className="subtitle">{this.props.date}</span>
                    <span className="subtitle">-</span>
                    <span className="subtitle">{this.props.time}</span>
                </div>
            </div>
        );
    }
}