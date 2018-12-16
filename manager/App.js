import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBr4mxVvZkpNGFG5U4_JiWNJt1S-SQa1p8",
      authDomain: "manager-1b2ea.firebaseapp.com",
      databaseURL: "https://manager-1b2ea.firebaseio.com",
      projectId: "manager-1b2ea",
      storageBucket: "manager-1b2ea.appspot.com",
      messagingSenderId: "639712147306"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;