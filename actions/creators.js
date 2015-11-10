import Q from 'q';

import { INIT, UPDATE_ATTR_FORM } from './types';

// for test
let  p = {name: "Richard", age: "33"};

export function init() {
  console.log('init creators ...');
  INIT({ p });
}

export function updatePerson(key, value) {
  //console.log('updatePerson key', key);
  //console.log('updatePerson value', value);
  UPDATE_ATTR_FORM({ key, value });
}
