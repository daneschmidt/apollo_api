import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import '../InfoPage/InfoPage.css';

class InfoPage extends Component {

  componentDidMount() {

    this.props.dispatch({
      type: 'FETCH_MISSION',
    });
  }

  render() {
   
    const missionArray = this.props.store.missionReducer.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.mission_patch} alt="mission patch" width="150"></img>

          <div class="bigText">
          <h3>Mission Name:</h3> {item.mission_name}<br></br>
          <h5>Mission Objectives:</h5>
          <pre>
          {item.mission_objectives}<br></br>
          <h3>Mission Highlights:</h3>
          {item.mission_highlights}<br></br>
          <br></br>
          </pre>
          </div>

          <h3>Crew</h3>
          <div><pre>
          Commander: {item.commander}<br></br>
          Lunar Module Pilot: {item.lunar_module_pilot}<br></br>
          Command Module Pilot: {item.command_module_pilot}<br></br>
          <br></br>
          Backup Commander: {item.backup_commander}<br></br>
          Backup Lunar Module Pilot: {item.backup_lunar_module_pilot}<br></br>
          Backup Command Module Pilot: {item.backup_command_module_pilot}<br></br>
          </pre></div>
          <br></br>
          <h3>Launch</h3>
          <pre>
          Launch Date: {item.launch_date}<br></br>
          Launch Location: {item.location}<br></br>
          Payload: {item.payload}<br></br>
          </pre>
          <br></br>
          <h3>Orbit</h3>
          <pre>
          Altitude: {item.altitude}<br></br>
          Inclination: {item.inclination}<br></br>
          Number of Orbits: {item.number_of_orbits}<br></br>
          Mission Duration: {item.mission_duration}<br></br>
          Distance Traveled: {item.distance_traveled}<br></br>
          </pre>
          <br></br>
          <h3>Lunar</h3>
          <pre>
          Lunar Location: {item.lunar_location}<br></br>
          Lunar Coordinates: {item.lunar_coordinates}<br></br>
          Time on Surface: {item.time_on_lunar_surface}<br></br>
          </pre>
          <br></br>
          <h3>Landing</h3>
          <pre>
          Landing Date: {item.landing_date}<br></br>
          Landing Location: {item.landing_location}<br></br>
          Recovery Ship: {item.recovery_ship}<br></br>
          </pre>
          <br></br>
        </div>
      )
    })

    return (
      <div>
        <h2>MISSION INFO</h2>
        {/* <p>{JSON.stringify(this.props.store.missionReducer)}</p> */}
        <div>{missionArray}</div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
