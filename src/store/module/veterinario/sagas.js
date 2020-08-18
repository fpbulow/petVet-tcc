import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { getVetSuccess } from './actions';

function* getVeterinarios() {
    try {
        const response = yield call(api.get, '/todos');

        yield put(getVetSuccess(response.data))
    } catch (error) {
        throw new Error('Error')
    }
}

export default all([
    takeLatest('vet/GET_VETERINARIO_REQUEST', getVeterinarios)
])