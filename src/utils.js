import { REG_EXP_EMAIL, PASSWORD_LENGTH, SORTING_TYPES } from './constants';

const { BOOLEAN, STRING, NUMBER } = SORTING_TYPES;

export function passwordValidator(value) {
  return value.length >= PASSWORD_LENGTH ? true : false;
}

export function emailValidator(email) {
  return REG_EXP_EMAIL.test(String(email).toLowerCase());
}

export function getrandomNameSurName(arr) {
  const randomName = Math.floor(Math.random() * arr.length);
  return arr[randomName];
}

export function getRandomAge(max, min) {
  const age = Math.floor(min + Math.random() * (max + 1 - min));
  return age;
}

export function getRandomActive() {
  return Math.random() > 0.5 ? true : false;
}

export function getRandomData(arrNames, arrSurnames) {
  return [
    getrandomNameSurName(arrNames),
    getrandomNameSurName(arrSurnames),
    getRandomAge(65, 18),
    getRandomActive()
  ];
}

export function sortByType(type, currType, arr = []) {
  switch (type) {
    case NUMBER:
      return arr.sort((a, b) => a[currType] - b[currType]);
    case STRING:
      return arr.sort((a, b) => {
        if (a[currType].toLowerCase() > b[currType].toLowerCase()) {
          return 1;
        }
        if (a[currType].toLowerCase() < b[currType].toLowerCase()) {
          return -1;
        }
        return 0;
      });
    case BOOLEAN:
      return arr.sort((a, b) =>
        a[currType] === b[currType] ? 0 : a[currType] ? -1 : 1
      );
    default:
      return [];
  }
}
