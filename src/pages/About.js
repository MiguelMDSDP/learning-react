import React from 'react'

import Navigation from '../components/Navigation'

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <section className="section">
                    <div className="container">
                        <h1 className="title">In this course we learned about:</h1>
                        <ol type="1">
                            <li>How to configure a React environment;</li>
                            <li>How to think with React;</li>
                            <li>How to use props;</li>
                            <li>What is a propType;</li>
                            <li>How to use Routers.</li>
                        </ol>
                    </div>
                </section>
            </div>
        );
    }
}