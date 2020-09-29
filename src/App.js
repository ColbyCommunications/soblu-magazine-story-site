import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import ScrollTop from './components/common/ScrollTop';

import LoadingComponent from './components/common/Loading';

const Home = loadable(
    () =>
        import(
            /* webpackChunkName: "home" */
            /* webpackMode: "lazy" */ './pages/Home.js'
        ),
    {
        fallback: <LoadingComponent />,
    }
);
const EdwinEssay = loadable(
    () =>
        import(
            /* webpackChunkName: "edwin-essay" */
            /* webpackMode: "lazy" */ './pages/EdwinEssay'
        ),
    {
        fallback: <LoadingComponent />,
    }
);
const SobluVoices = loadable(
    () =>
        import(
            /* webpackChunkName: "soblu-voices" */
            /* webpackMode: "lazy" */ './pages/SobluVoices'
        ),
    {
        fallback: <LoadingComponent />,
    }
);
const ChapelTakeover = loadable(
    () =>
        import(
            /* webpackChunkName: "chapel-takeover" */
            /* webpackMode: "lazy" */ './pages/ChapelTakeover'
        ),
    {
        fallback: <LoadingComponent />,
    }
);
const Eve = loadable(
    () =>
        import(
            /* webpackChunkName: "eve" */
            /* webpackMode: "lazy" */ './pages/Eve'
        ),
    {
        fallback: <LoadingComponent />,
    }
);
const TheUnity = loadable(
    () =>
        import(
            /* webpackChunkName: "the-unity" */
            /* webpackMode: "lazy" */ './pages/TheUnity'
        ),
    {
        fallback: <LoadingComponent />,
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
                <Route exact path="/eve">
                    <Eve />
                </Route>
                <Route exact path="/the-unity">
                    <TheUnity />
                </Route>
            </Switch>
        </ScrollTop>
    </Router>
);

export default App;
