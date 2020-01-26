import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MaterialUI

import {
  Button,
  // Grid,
  Container
} from '@material-ui/core';

// Theme
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import {
  grey,
  red,
} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();
 
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <br />
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
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
            className="register"
            type="submit"
            name="submit"
            value="Register"
            size="small"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
            </center>
          </div>
        </form>
      </div>
      </Container>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

