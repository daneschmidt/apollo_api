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

        const detailsArray = this.props.store.specMissionReducer.map((item, index) => {
            return (
                <div key={index}>
                    {item.mission_name}
                </div>
            )
        })

        return (
            <div>
                <h2>TEST INFO</h2>
                {detailsArray}
            </div>

        )
    }
}

export default connect(mapStoreToProps)(DetailsPage);
