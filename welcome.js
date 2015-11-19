import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'fluxx';
import { init } from './actions/creators';
import MyForm from './MyForm';
import personStore from './store';

console.log("index.js ...");

let unregister;

export default {
  enter() {
    unregister = Store.onChange(personStore)(() => {
      ReactDOM.render(
        <MyForm currentPerson={personStore.person()} />, document.getElementById('container')
      );
    });
    init();
  },

  exit() {
    unregister();
  }
};
