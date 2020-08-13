import { produce } from 'immer';

const Types = {
    SIGN_IN_REQUEST: 'login/SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: 'login/SIGN_IN_SUCCESS'
}

const INITIAL_STATE = {
    loading: false,
}

export default function login(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case Types.SIGN_IN_REQUEST: {
                draft.loading = true;
                break;
            }

            default:
                break;
        }
    })
}