import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



class InfoPage extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_MISSION',
    });
    // window.location.replace('src/components/InfoPage/test.html')
  }

  render() {
   

    return (
      <div>

        <p>{JSON.stringify(this.props.store.missionReducer)}</p>

      </div>
    )
}
}


export default connect(mapStoreToProps)(InfoPage);
