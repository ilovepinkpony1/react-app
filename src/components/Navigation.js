import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { HISTORY } from '../constants';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Table from './Table';
import './navigation.css';
import PropTypes from 'prop-types';

export default function Navigation(props) {
  const {
    data,
    login,
    registration,
    isLogined,
    handleChangeInputLogin,
    handleChangeInputPassword,
    handleChangeInputSearch,
    handleSubmitLogin,
    handleSubmitRegistration,
    showModal,
    quitModal,
    modalValues,
    modalDisplay,
    searchValue,
    sortTable,
    logOut,
  } = props;

  return (
    <BrowserRouter histoty={HISTORY}>
      <header className='app-header'>
        <nav className='app-header__navbar'>
          <ul className='app-header__navbar-list'>
            {isLogined ? null : (
              <li className='app-header__navbar-item'>
                <Link
                  className='app-header__navbar-item__anchor'
                  to='/registration'
                >
                  registration
                </Link>
              </li>
            )}
            {isLogined ? null : (
              <li className='app-header__navbar-item'>
                <Link className='app-header__navbar-item__anchor' to='/login'>
                  login
                </Link>
              </li>
            )}
            <li className='app-header__navbar-item'>
              <Link className='app-header__navbar-item__anchor' to='/users'>
                Users
              </Link>
            </li>
            <li className='app-header__navbar-item'>
              <Link
                className='app-header__navbar-item__anchor'
                to='/active'
              >
                Online users
              </Link>
            </li>
            {isLogined ? (
              <li className='app-header__navbar-item'>
                <button className='app-header__navbar-item__button' onClick={() => logOut()}>
                  log out
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </header>

      <hr />

      <Route
        path='/registration'
        render={() => (
          <RegistrationForm
            handleChangeInputLogin={handleChangeInputLogin}
            handleChangeInputPassword={handleChangeInputPassword}
            handleSubmitRegistration={handleSubmitRegistration}
            inputData={registration}
          />
        )}
      />
      <Route
        path='/login'
        render={() => (
          <LoginForm
            handleChangeInputPassword={handleChangeInputPassword}
            handleChangeInputLogin={handleChangeInputLogin}
            handleSubmitLogin={handleSubmitLogin}
            inputData={login}
          />
        )}
      />
      <Route
        path='/users'
        render={() => (
          <Table
            handleChangeInputSearch={handleChangeInputSearch}
            showModal={showModal}
            quitModal={quitModal}
            data={data}
            modalValues={modalValues}
            modalDisplay={modalDisplay}
            searchValue={searchValue}
            sortTable={sortTable}
          />
        )}
      />
      <Route
        path='/active'
        render={() => (
          <Table
            handleChangeInputSearch={handleChangeInputSearch}
            showModal={showModal}
            quitModal={quitModal}
            data={data}
            modalValues={modalValues}
            modalDisplay={modalDisplay}
            searchValue={searchValue}
          />
        )}
      />
    </BrowserRouter>
  );
}

Navigation.propTypes = {
  data: PropTypes.array,
  login: PropTypes.object,
  registration: PropTypes.object,
  isLogined: PropTypes.bool,
  handleChangeInputLogin: PropTypes.func,
  handleChangeInputPassword: PropTypes.func,
  handleChangeInputSearch: PropTypes.func,
  handleSubmitLogin: PropTypes.func,
  handleSubmitRegistration: PropTypes.func,
  showModal: PropTypes.func,
  quitModal: PropTypes.func,
  modalValues: PropTypes.object,
  modalDisplay: PropTypes.bool,
  searchValue: PropTypes.string,
  sortTable: PropTypes.func,
  logOut: PropTypes.func,
}
