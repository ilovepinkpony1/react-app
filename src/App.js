import React, { Component } from 'react';
import * as service from './users-service-mock';
import { sortByType } from './utils';
import Navigation from './components/Navigation';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        name: '',
        pass: '',
      },
      registration: {
        name: '',
        pass: '',
      },
      data: [],
      isLogined: false,
      searchValue: '',
      modalDisplay: false,
      modalValues: null,
    }

    this.handleChangeInputLogin = this.handleChangeInputLogin.bind(this);
    this.handleChangeInputPassword = this.handleChangeInputPassword.bind(this);
    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
    this.handleSubmitRegistration = this.handleSubmitRegistration.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.showModal = this.showModal.bind(this);
    this.quitModal = this.quitModal.bind(this);
    this.sortTable = this.sortTable.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  sortTable(type, currType) {
    this.setState({
      data: sortByType(type, currType, this.state.data),
    });
  }

  getData() {
    service.findAll()
      .then(users => {
        this.setState({
          data: users,
        })
      })
      .catch(error => console.log(error));
  }

  handleChangeInputLogin(event, target) {
    this.setState({
      [target]: {
        ...this.state[target],
        name: event.target.value,
      }
    });
  }

  handleChangeInputPassword(event, target) {
    this.setState({
      [target]: {
        ...this.state[target],
        pass: event.target.value,
      }
    });
  }

  handleChangeInputSearch(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSubmitRegistration(event) {
    const { name, pass } = this.state.registration;

    event.preventDefault();
    if (!localStorage.getItem(name)) {
      localStorage.setItem(name, pass);
      this.setState({
        registration: {
          name: '',
          pass: '',
        }
      })
      alert('successfully registered');
    } else {
      alert('You already registred!');
    }
  }

  handleSubmitLogin(event) {
    const { name, pass } = this.state.login;

    event.preventDefault();
    if (localStorage.getItem(name)
      && localStorage.getItem(name) === pass) {
      this.setState({
        isLogined: true,
        login: {
          name: '',
          pass: '',
        }
      })
      alert('successfully login');
    } else if (localStorage.getItem(name)
      && localStorage.getItem(name) !== pass) {
      alert('Wrong password');
    } else {
      alert('You are not registered yet!');
    }
  }

  showModal(values) {
    this.setState({
      modalDisplay: true,
      modalValues: values,
    })
  }

  quitModal() {
    this.setState({
      modalDisplay: false,
    })
  }

  logOut() {
    this.setState({
      isLogined: false,
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { 
      login,
      registration,
      data,
      isLogined,
      modalDisplay,
      searchValue,
      modalValues,
    } = this.state;

    return (
      <div className="main">
        <Navigation 
          login={login} 
          registration={registration} 
          data={data} 
          isLogined={isLogined}
          handleChangeInputLogin={this.handleChangeInputLogin}
          handleChangeInputPassword={this.handleChangeInputPassword}
          handleChangeInputSearch={this.handleChangeInputSearch}
          showModal={this.showModal}
          quitModal={this.quitModal}
          handleSubmitRegistration={this.handleSubmitRegistration}
          handleSubmitLogin={this.handleSubmitLogin}
          searchValue={searchValue}
          modalDisplay={modalDisplay}
          modalValues={modalValues}
          sortTable={this.sortTable}
          logOut={this.logOut}
        />
      </div>
    )
  }
}

