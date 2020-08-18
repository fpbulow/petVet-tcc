export function getVetRequest() {
    return {
        type: 'vet/GET_VETERINARIO_REQUEST',
    }
}

export function getVetSuccess(data) {
    return {
        type: 'vet/GET_VETERINARIO_SUCCESS',
        payload: { data }
    }
}