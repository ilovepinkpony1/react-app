import { getRandomData } from './utils';
import { PEOPLE_COUNT } from './constants';

const names = [
  'Julie',
  'Noah',
  'Santos',
  'Tracy',
  'Elbert',
  'Guadalupe',
  'Willard',
  'Eunice',
  'Darren',
  'Henrietta',
  'Johnnie',
  'Marion',
  'Jerome',
  'Mary',
  'Enrique',
  'Gilbert',
  'Bethany',
  'Bernadette',
  'Maggie',
  'Damon',
  'Emanuel',
  'Don',
  'Melvin',
  'Linda',
  'Trevor'
];

const surNames = [
  'Mccarthy',
  'Silva',
  'Green',
  'Hernandez',
  'Benson',
  'Jensen',
  'Paul',
  'Garcia',
  'Bush',
  'Osborne',
  'Harris',
  'Day',
  'Curry',
  'Moore',
  'Mullins',
  'Vasquez',
  'Larson',
  'Terry',
  'Christensen',
  'Cannon',
  'Freeman',
  'Fernandez',
  'Jenkins',
  'Medina',
  'Bailey'
];

class User {
  constructor(name, surName, age, isActive) {
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.isActive = isActive;
  }
}

export const usersData = [];

for (let i = 0; i < PEOPLE_COUNT; i++) {
  usersData.push(new User(...getRandomData(names, surNames)));
}