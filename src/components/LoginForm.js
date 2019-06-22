import React from 'react';
import './login.css';
import { passwordValidator, emailValidator } from '../utils';
import PropTypes from 'prop-types';

export default function LoginForm(props) {
  const {
    handleChangeInputPassword,
    handleChangeInputLogin,
    handleSubmitLogin,
    inputData
  } = props;

  return (
    <div>
      <p className='login-description'>Login to your account</p>
      <form onSubmit={(event) => handleSubmitLogin(event)} className='login-form'>
        <label>
          Login:
          <input
            type='email'
            name='login'
            placeholder='login(email)'
            onChange={(event) => handleChangeInputLogin(event, 'login')}
            value={inputData.name}
            className='login-form__input'
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={(event) => handleChangeInputPassword(event, 'login')}
            value={inputData.pass}
            className='login-form__input'
          />
        </label>

        <input
          type='submit'
          value='login'
          disabled={
            passwordValidator(inputData.pass) && emailValidator(inputData.name)
              ? false
              : true
          }
          className='login-form__submit-button'
        />
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  handleChangeInputPassword: PropTypes.func,
  handleChangeInputLogin: PropTypes.func,
  handleSubmitLogin: PropTypes.func,
  inputData: PropTypes.object,
}