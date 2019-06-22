import { usersData } from './users-data';

export const findAll = () => new Promise(resolve => resolve(usersData));