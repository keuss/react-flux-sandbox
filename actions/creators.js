import { INIT, UPDATE_ATTR_FORM, ADD_PERSON } from './types';

export function init() {
  const defaultPerson = {name: "Richard", age: "33"};
  INIT({ defaultPerson });
}

export function updatePerson(key, value) {
  // TODO use UPDATE_ATTR_FORM
}

export function updatePersonList(newPerson) {
  // TODO use ADD_PERSON
}
