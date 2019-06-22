import { createBrowserHistory } from 'history';

export const HISTORY = createBrowserHistory();
export const PASSWORD_LENGTH = 6;
export const REG_EXP_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGISTRED = 'registred';
export const AUTHORIZED = 'authorized';
export const PEOPLE_COUNT = 30;
export const SORTING_TYPES = {
  BOOLEAN: 'boolean',
  STRING: 'string',
  NUMBER: 'number',
}