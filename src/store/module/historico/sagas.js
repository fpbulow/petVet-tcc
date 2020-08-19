import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { getHistoricoSuccess } from './actions';

function* getHistoricos() {
    try {
        const response = yield call(api.get, '/atendimentos');

        yield put(getHistoricoSuccess(response.data))
    } catch (error) {
        throw new Error('Error no Historico')
    }
}

export default all([
    takeLatest('historico/GET_HISTORICO_REQUEST', getHistoricos)
])