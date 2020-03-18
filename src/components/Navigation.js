import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/scoreboard" className="navbar-item">Scoreboard</Link>
                    <Link to="/about" className="navbar-item">About</Link>
                </div>
            </nav>
        );
    }
}