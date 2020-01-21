import axios from 'axios';
import { put, takeLatest, } from 'redux-saga/effects';


function* getSpecMission() {

    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/data/'
        });

        yield put({
            type: 'SET_DATA',
            payload: response.data
        });

    } catch (err) {
        console.log('error fetching data in the specMissionSaga', err);
    }

}

function* specMissionSaga() {
    yield takeLatest('FETCH_DATA', getSpecMission);
}


export default specMissionSaga;