import { produce } from 'immer';

const Types = {
    SIGN_IN_REQUEST: 'login/SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: 'login/SIGN_IN_SUCCESS',
    GET_PROFILE_REQUEST: 'login/GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS: 'login/GET_PROFILE_SUCCESS',
}

const INITIAL_STATE = {
    loading: false,
    profile: {},
}

export default function login(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case Types.SIGN_IN_REQUEST: {
                draft.loading = true;
                break;
            }

            case Types.GET_PROFILE_REQUEST: {
                draft.loading = true;
                break;
            }

            case Types.GET_PROFILE_SUCCESS: {
                draft.loading = false;
                draft.profile = action.payload.data
                break;
            }

            default:
                break;
        }
    })
}