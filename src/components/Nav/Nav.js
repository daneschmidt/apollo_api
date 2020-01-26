import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';


const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h1 className="nav-title">SpaceCraftInfo API by Dane Schmidt</h1>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        <h4>{props.store.user.id ? 'Home' : 'Login / Register'}</h4>
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.store.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}
          <Link className="nav-link" to="/admin">
          <h4>User Info</h4>
          </Link>
          {/* <LogOutButton className="nav-link" /> */}
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        <h4>About</h4>
      </Link>

      {/* <a href="https://app.swaggerhub.com/apis-docs/daneschmidt/spacecraftinfo/2.0">
      <h4>Documentation</h4>
      </a> */}

       {/* <Link className="nav-link" url="https://app.swaggerhub.com/apis-docs/daneschmidt/spacecraftinfo/2.0">
      <h4>Documentation</h4>
      </Link> */}

    </div>
  </div>
);

export default connect(mapStoreToProps)(Nav);
