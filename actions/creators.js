import { INIT, UPDATE_ATTR_FORM, ADD_PERSON } from './types';

export function init() {
  const defaultPerson = {name: "Richard", age: "33"};
  INIT({ defaultPerson });
}

export function updatePerson(key, value) {
  UPDATE_ATTR_FORM({ key, value });
}

export function updatePersonList(newPerson) {
  ADD_PERSON({ newPerson })
}
