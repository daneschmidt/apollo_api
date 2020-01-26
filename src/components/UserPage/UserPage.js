import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

import '../UserPage/UserPage.css';

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
    lime,
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

const UserPage = (props) => (
    <MuiThemeProvider theme={theme} >
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <center>
                <h2 id="welcome" >
                    Welcome, {props.store.user.username}!
                </h2>
                <h3> Your ID is: {props.store.user.id} </h3>
                <h2> Your API KEY is: {props.store.user.api_key}</h2>
                <h3>Your API KEY is private. Please do not share.</h3>
                <h3> Full Documentation in available at</h3>
                <div><Button variant="contained"
                    color="secondary"
                    type="button"
                    className="log-in, btn"
                    size="large"
                    onClick={
                        () => window.open('https://app.swaggerhub.com/apis-docs/daneschmidt/spacecraftinfo/2.0')}> VIEW DOCUMENTATION
                </Button></div>
                <br />
                <br />
                <br />
                <div><Button variant="contained"
                    color="primary"
                    type="button"
                    className="log-in, btn"
                    onClick={
                        () => props.dispatch({ type: 'LOGOUT' })}> LOG OUT
    </Button></div>
            </center>
        </div>
    </MuiThemeProvider>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);