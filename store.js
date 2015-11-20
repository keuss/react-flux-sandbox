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
    person[payload.key] = payload.value;
  });

  on(ADD_PERSON, payload => {
    personList = personList.concat(payload.newPerson);
  });

  return {
    person: () => person,
    personList: () => personList
  };
});
