import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { getProfileSuccess } from './actions';

function* getProfile({ payload: { id } }) {
    try {
        const response = yield call(api.get, '/perfil');

        yield put(getProfileSuccess(response.data));
    } catch (error) {
        throw new Error('Error')
    }
}

export default all([
    takeLatest('login/GET_PROFILE_REQUEST', getProfile)
])