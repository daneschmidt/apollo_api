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
import Paper from '@material-ui/core/Paper';

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

    };

    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return ( <
            MuiThemeProvider theme = { theme } >
            <
            Container >
            <
            h2 > { this.state.heading } < /h2>

            <
            Grid container direction = "column"
            justify = "center"
            alignItems = "center" >
            <
            Grid item xs = { 6 } >
            <
            h4 >
            Welcome to SpaceCraftInfo API <
            /h4>

            <
            /Grid> <
            Grid item xs = { 6 } >
            <
            h3 > Already a Member ? < /h3> <
            Button variant = "contained"
            color = "primary"
            type = "button"
            className = "btn btn_sizeFull"
            onClick = { this.onLogin } >
            Login <
            /Button> < /
            Grid > <
            /Grid> < /
            Container > <
            /MuiThemeProvider>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);