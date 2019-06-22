import React from 'react';
import './registration.css';
import { passwordValidator, emailValidator } from '../utils';


export default function Registration(props) {
  const {
    handleChangeInputLogin,
    handleChangeInputPassword,
    handleSubmitRegistration,
    inputData
  } = props;
  return (
    <div>
      <p className='registration-description'>Registration</p>
      <form onSubmit={(event) => handleSubmitRegistration(event)} className='registration-form'>
        <label>
          Login:
          <input
            type='email'
            name='login'
            placeholder='login(email)'
            value={inputData.name}
            onChange={(event) => handleChangeInputLogin(event, 'registration')}
            className='registration-form__input'
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='password'
            value={inputData.pass}
            onChange={(event) => handleChangeInputPassword(event, 'registration')}
            className='registration-form__input'
          />
        </label>

        <input
          type='submit'
          value='register'
          disabled={
            passwordValidator(inputData.pass) && emailValidator(inputData.name)
              ? false
              : true
          }
          className='registration-form__submit-button'
        />
      </form>
    </div>
  );
}
