import request from './request';

export const findAll = () => {
  return request({ url: 'users.json' }).then(
    data => (data = JSON.parse(data))
  );
};
