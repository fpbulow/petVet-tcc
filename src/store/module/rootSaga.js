import { all } from 'redux-saga/effects';

import login from './login/sagas';
import veterinario from './veterinario/sagas';

export default function* rootSaga() {
    yield all([login, veterinario]);
}