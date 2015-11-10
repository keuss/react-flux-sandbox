import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'fluxx';
import { init } from './actions/creators';
import MyForm from './MyForm';
import personStore from './store';

console.log("index.js ...");

Store.onChange(personStore)(() => {
  ReactDOM.render(
    <MyForm currentPerson={personStore.person()} />, document.getElementById('container')
  );
});

// First init for fluxx see creators ...
// warning : no state - no router => call after submit ... !
init();
