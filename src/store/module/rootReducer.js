import { combineReducers } from 'redux';

import login from './login/reducer';

export const rootReducer = combineReducers({
    login,
});
