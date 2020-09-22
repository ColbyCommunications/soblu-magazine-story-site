import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import ScrollTop from './components/common/ScrollTop';

const Home = loadable(
    () =>
        import(
            /* webpackChunkName: "home" */
            /* webpackMode: "lazy" */ './pages/Home.js'
        ),
    {
        fallback: <div />,
    }
);
const EdwinEssay = loadable(
    () =>
        import(
            /* webpackChunkName: "edwin-essay" */
            /* webpackMode: "lazy" */ './pages/EdwinEssay'
        ),
    {
        fallback: <div />,
    }
);
const SobluVoices = loadable(
    () =>
        import(
            /* webpackChunkName: "soblu-voices" */
            /* webpackMode: "lazy" */ './pages/SobluVoices'
        ),
    {
        fallback: <div />,
    }
);
const ChapelTakeover = loadable(
    () =>
        import(
            /* webpackChunkName: "chapel-takeover" */
            /* webpackMode: "lazy" */ './pages/ChapelTakeover'
        ),
    {
        fallback: <div />,
    }
);

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
