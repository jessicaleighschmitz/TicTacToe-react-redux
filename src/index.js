import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import turnReducer from './reducers/turn-reducer';

const store = createStore(turnReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


const render = (Game) => {
  ReactDOM.render(
      <Provider store={store}>
        <Game/>
      </Provider>,
    document.getElementById('root')
  );
};
