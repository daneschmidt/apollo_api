import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {

    this.props.dispatch({
      type: 'FETCH_MISSION',
    });
  }

  render() {
    return (
      <div>
        <h2>MISSION INFO</h2>
        <p>{JSON.stringify(this.props.store.missionReducer)}</p>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);



