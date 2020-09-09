import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import EdwinEssay from './pages/EdwinEssay';
import SobluVoices from './pages/SobluVoices';
import ChapelTakeover from './pages/ChapelTakeover';

import ScrollTop from './components/common/ScrollTop';

const App = () => (
    <Router>
        <ScrollTop>
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
                <Route exact path="/chapel-takeover-1970">
                    <ChapelTakeover />
                </Route>
            </Switch>
        </ScrollTop>
    </Router>
);

export default App;
