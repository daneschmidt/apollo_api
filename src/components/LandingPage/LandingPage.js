import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// MaterialUI

import {
    Button,
    Grid,
    Container
} from '@material-ui/core';

// Theme
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import {
    grey,
    red,
    teal,
} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: teal,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

class LandingPage extends Component {
    state = {
        heading: 'SpaceCraftInfo API',
    };

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
                                <h2>
                                    Welcome
                                </h2>
                                <h4>SpaceCraftInfo is an open source REST API for spacecraft mission and crew data.</h4>
                            </div>
                            <div>
                                <h5>Already a Member?</h5>
                                <Button variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={this.onLogin}
                                >
                                    Login
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