import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducer/index';
import middleware from './middle';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
