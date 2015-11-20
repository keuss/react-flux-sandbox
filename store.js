import { Store } from 'fluxx';

import {
  INIT,
  UPDATE_ATTR_FORM,
  ADD_PERSON
} from './actions/types';

export default Store(on => {
  let person;
  let personList = [];

  on(INIT, payload => {
    person = payload.defaultPerson;
  });

  on(UPDATE_ATTR_FORM, payload => {
    // TODO update person ...
  });

  on(ADD_PERSON, payload => {
    // TODO update personList
  });

  return {
    person: () => person,
    personList: () => personList
  };
});
