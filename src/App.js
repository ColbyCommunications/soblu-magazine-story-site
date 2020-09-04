import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import EdwinEssay from './pages/EdwinEssay';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/edwin-essay">
                <EdwinEssay />
            </Route>
        </Switch>
    </Router>
);

export default App;
