import React from "react";
import { Router, Route } from "react-router";
import { createHashHistory } from "history";

import App from "./pages/App";
import Scoreboard from "./pages/Scoreboard";
import About from "./pages/About";

const hashHistory = createHashHistory();

const Routes =
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/scoreboard" component={Scoreboard} />
            <Route path="/about" component={About} />
        </Route>
    </Router>

export default Routes;