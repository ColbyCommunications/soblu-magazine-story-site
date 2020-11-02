import React from 'react';
import { render } from 'react-dom';

import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

import App from './App';
import './app.scss';

Sentry.init({
    dsn: 'https://c8508eb5daaf4cdcad9ed0897d1fb44b@o322766.ingest.sentry.io/5501477',
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

myUndefinedFunction();

render(<App />, document.getElementById('app'));
