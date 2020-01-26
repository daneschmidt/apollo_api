import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// MaterialUI

import {
    Button,
    // Grid,
    // Container
} from '@material-ui/core';

// Theme
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {
    grey,
    red,
    lime,
} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: lime,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

class LandingPage extends Component {
    state = {};

    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <center>
                        <h2>{this.state.heading}</h2>
                        <div className="grid">
                            <div className="grid-col grid-col_8">
                                <h1>
                                    Welcome to SpaceCraftInfo API
                                </h1>
                                <h3>SpaceCraftInfo is an open source REST API <br />for spacecraft mission and crew data.</h3>
                                <h3>The API is launching with NASA Apollo Data <br />but much more data from many other missions <br />will be added soon.</h3>
                            </div>
                            <br />
                            <div><Button variant="contained"
                                color="secondary"
                                type="button"
                                className="log-in, btn"
                                size="large"
                                onClick={
                                    () => window.open('https://safe-sea-74517.herokuapp.com/api/mission')}> VIEW SAMPLE DATA
                                    
                            </Button></div>
                            <br />
                            <br />
                            <br />
                            <div>
                                {/* <h5>Already a Member?</h5> */}
                                <Button variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={this.onLogin}
                                >
                                    Enter
                                </Button>
                            </div>
                        </div>
                    </center>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);