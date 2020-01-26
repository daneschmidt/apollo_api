import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import '../LoginPage/LoginPage.css'

// MaterialUI

import {
  Button,
  // Grid,
  Container
} from '@material-ui/core';

// Theme
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  grey,
  lime,
  red,
} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: lime,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <br />
        <br />
        <Container>
          {this.props.store.errors.loginMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.store.errors.loginMessage}
            </h2>
          )}
          <form onSubmit={this.login}>
            <h1>Login</h1>
            <div>
              <center>
                <label className="form_label" htmlFor="username">
                  Username:
              <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </label>
              </center>
            </div>
            <div>
              <center>
                <label className="form_label" htmlFor="password">
                  Password:
              <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </label>
              </center>
            </div>
            <div>
              <br />
              <center>
                <Button variant="contained" color="primary"
                  type="submit"
                  className="button-spacer">
                  Log In
            </Button>
              </center>
            </div>
          </form>
          <center>
            <br />
            <br />
            <br />
            <br />
            <Button variant="contained" color="primary"
              type="button"
              className="button-spacer"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
            >
              Register
          </Button>
          </center>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
