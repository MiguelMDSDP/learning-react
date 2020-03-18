import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import App from "./pages/App";
import Scoreboard from "./pages/Scoreboard";
import About from "./pages/About";

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/scoreboard">
                        <Scoreboard />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}