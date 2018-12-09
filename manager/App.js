import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;