import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getMissions() {
    console.log(`In getHomePage`);

    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/mission'
        });
       
        yield put({
            type: 'SET_MISSION',
            payload: response.data
        });

    } catch(err) {
        console.log('error fetching data', err);
    }

}

function* missionSaga() {
    yield takeLatest('FETCH_MISSION', getMissions);
  }


export default missionSaga;