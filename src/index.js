import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';

import './app.scss';

// const store = configureStore();

// render(
//     <Provider store={store}>
//         <div>Foo</div>
//     </Provider>,
//     document.getElementById('app')
// );
render(<App />, document.getElementById('app'));
