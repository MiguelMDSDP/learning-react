import React from 'react';

import Navigation from '../components/Navigation'
import Welcome from '../components/Welcome'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Welcome />
            </div>
        );
    }
}