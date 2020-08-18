import { produce } from 'immer';

const INITIAL_STATE = {
    loading: false,
    data: []
}

export default function historico(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'historico/GET_HISTORICO_REQUEST': {
                draft.loading = true;
                break;
            }

            case 'historico/GET_HISTORICO_SUCCESS': {
                draft.loading = false;
                draft.data = action.payload.data;
                break;
            }

            default:
                break;
        }
    })
}