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
    const missionArray = this.props.store.missionReducer.map((item, index) => {
      return (
        <div>
          <img src={item.mission_patch} width="100" height="100"></img>
          Mission Name: {item.mission_name}<br></br>
          {item.mission_overview}<br></br>
          <br></br>
          Commander: {item.commander}<br></br>
          Lunar Module Pilot: {item.lunar_module_pilot}<br></br>
          Command Module Pilot: {item.command_module_pilot}<br></br>
          <br></br>
          Backup Commander: {item.backup_commander}<br></br>
          Backup Lunar Module Pilot: {item.backup_lunar_module_pilot}<br></br>
          Backup Command Module Pilot: {item.backup_command_module_pilot}<br></br>
          <br></br>
          Altitude: {item.altitude}<br></br>
          Inclination: {item.inclination}<br></br>
          Number of Orbits: {item.number_of_orbits}<br></br>
          Mission Duration: {item.mission_duration}<br></br>
          Distance Traveled: {item.distance_traveled}<br></br>
          <br></br>
        </div>


      )

    })

    return (
      <div>
        <h2>MISSION INFO</h2>
        {/* <p>{JSON.stringify(this.props.store.missionReducer)}</p> */}
        <p>{missionArray}</p>
      </div>
    )
  }
}


// class InfoPage extends Component {

//   componentDidMount() {

//     this.props.dispatch({
//       type: 'FETCH_MISSION',
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>MISSION INFO</h2>
//         <p>{JSON.stringify(this.props.store.missionReducer)}</p>
//       </div>
//     )
//   }
// }

export default connect(mapStoreToProps)(InfoPage);



