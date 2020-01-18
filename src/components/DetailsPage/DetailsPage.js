import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import '../InfoPage/InfoPage.css';

class DetailsPage extends Component {

    componentDidMount() {

        this.props.dispatch({
            type: 'FETCH_DETAILS',
        });
    }

    render() {

            
            return (
                <div>
                
                <p>{JSON.stringify(this.props.store.specMissionReducer)}</p>
                </div>
            )
    }
}

export default connect(mapStoreToProps)(DetailsPage);
