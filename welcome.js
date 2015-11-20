import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'fluxx';
import { init } from './actions/creators';
import MyForm from './MyForm';
import personStore from './store';

let unregister;

export default {
  enter() {
    console.log('enter ...');
    unregister = Store.onChange(personStore)(() => {
      console.log('onChange store ...');
      ReactDOM.render(
        <MyForm currentPerson={personStore.person()} personList={personStore.personList()} />, document.getElementById('container')
      );
    });
    init();
  },

  exit() {
    unregister();
  }
};
