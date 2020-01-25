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

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => ( <
    MuiThemeProvider theme = { theme } >
    <
    div >
    <
    h1 id = "welcome" >
    Welcome, { props.store.user.username }!
    <
    /h1> <
    h3 > Your ID is: { props.store.user.id } < /h3> <
    h3 > Your API KEY is: { props.store.user.api_key } < /h3> <
    h3 > Full Documentation in available at < /h3>

    {
        /* <Button variant="contained" color="primary"
                    type="button" className="log-in, btn" onClick="{location.href = 'https://app.swaggerhub.com/apis-docs/daneschmidt/spacecraftinfo/2.0';}">HERE</Button> */
    }

    <
    Button variant = "contained"
    color = "primary"
    type = "button"
    className = "log-in, btn"
    onClick = {
        () => props.dispatch({ type: 'LOGOUT' }) } > LOG OUT < /Button> <
    /div> <
    /MuiThemeProvider>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);