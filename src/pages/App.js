import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav is-tab has-shadow">
                    <div className="nav-left">
                        <a href="#" className="nav-item">Home</a>
                        <a href="#" className="nav-item">Scoreboard</a>
                        <a href="#" className="nav-item">About</a>
                    </div>
                </nav>

                <section className="section">
                    <div className="container">
                        <h1 className="title">{this.props.children}</h1>
                    </div>
                </section>
            </div>
        );
    }
}