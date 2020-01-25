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
                <div className="container">
                    <h2>{this.state.heading}</h2>

                    <div className="grid">
                        <div className="grid-col grid-col_8">
                            <p>
                                Welcome to SpaceCraftInfo API
                        </p>

                        </div>
                        <div className="grid-col grid-col_4">
                            <h3>Already a Member?</h3>
                            <Button variant="contained"
                                color="primary"
                                type="button"
                                className="btn btn_sizeFull"
                                onClick={this.onLogin}
                            >
                                Login
                        </Button>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
