import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
          <h3>Mission Name:</h3> {item.mission_name}<br></br>
          {item.mission_overview}<br></br>
          <br></br>
          <h3>Crew</h3>
          Commander: {item.commander}<br></br>
          Lunar Module Pilot: {item.lunar_module_pilot}<br></br>
          Command Module Pilot: {item.command_module_pilot}<br></br>
          <br></br>
          Backup Commander: {item.backup_commander}<br></br>
          Backup Lunar Module Pilot: {item.backup_lunar_module_pilot}<br></br>
          Backup Command Module Pilot: {item.backup_command_module_pilot}<br></br>
          <br></br>
          <h3>Launch</h3>
          Launch Info:<br></br>
          Launch Date: {item.launch_date}<br></br>
          Launch Location: {item.location}<br></br>
          Payload: {item.payload}<br></br>
          <br></br>
          <h3>Orbit</h3>
          Altitude: {item.altitude}<br></br>
          Inclination: {item.inclination}<br></br>
          Number of Orbits: {item.number_of_orbits}<br></br>
          Mission Duration: {item.mission_duration}<br></br>
          Distance Traveled: {item.distance_traveled}<br></br>
          <br></br>
          <h3>Lunar</h3>
          Lunar Location: {item.lunar_location}<br></br>
          Lunar Coordinates: {item.lunar_coordinates}<br></br>
          Time on Surface: {item.time_on_lunar_surface}<br></br>
          <br></br>
          <h3>Landing</h3>
          Landing Date: {item.landing_date}<br></br>
          Landing Location: {item.landing_location}<br></br>
          Recovery Ship: {item.recovery_ship}<br></br>
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

export default connect(mapStoreToProps)(InfoPage);
