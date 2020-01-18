import axios from 'axios';
import { put, takeLatest, } from 'redux-saga/effects';


function* getSpecMission() {

    try {
        const response = yield axios({
            method: 'GET',
            // url: '/api/mission/flightDetails',
            url: '/api/mission/',
        });

        yield put({
            type: 'SET_SPEC_MISSION',
            payload: response.data
        });

    } catch (err) {
        console.log('error fetching data', err);
    }

}

function* specMissionSaga() {
    yield takeLatest('FETCH_DETAILS', getSpecMission);
}


export default specMissionSaga;