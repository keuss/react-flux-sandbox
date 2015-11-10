import { Store } from 'fluxx';

import {
  INIT,
  UPDATE_ATTR_FORM
} from './actions/types';

export default Store(on => {
  let person;

  on(INIT, payload => {
    //console.log('INIT', payload);
    person = payload.p;
  });

  on(UPDATE_ATTR_FORM, payload => {
    //console.log('UPDATE_ATTR_FORM', payload);
    person[payload.key] = payload.value;
  });

  return {
    // getters
    person: () => person
  };

});
