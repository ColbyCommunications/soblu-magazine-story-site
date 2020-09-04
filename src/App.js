import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import EdwinEssay from './pages/EdwinEssay';
import SobluVoices from './pages/SobluVoices';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/edwin-essay">
                <EdwinEssay />
            </Route>
            <Route exact path="/soblu-voices">
                <SobluVoices />
            </Route>
        </Switch>
    </Router>
);

export default App;
