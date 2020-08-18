import { produce } from 'immer';

const INITIAL_STATE = {
    loading: false,
    data: []
}

export default function vet(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'vet/GET_VETERINARIO_REQUEST': {
                draft.loading = true;
                break;
            }

            case 'vet/GET_VETERINARIO_SUCCESS': {
                draft.loading = false;
                draft.data = action.payload.data;
                break;
            }

            default:
                break;
        }
    })
}