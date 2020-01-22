import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

class LandingPage extends Component {
    state = {
        heading: 'SpaceCraftInfo API',
    };

    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return (
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
                        <button
                            className="btn btn_sizeFull"
                            onClick={this.onLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
