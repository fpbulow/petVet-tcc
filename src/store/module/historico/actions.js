export function getHistoricoRequest() {
    return {
        type: 'historico/GET_HISTORICO_REQUEST',
    }
}

export function getHistoricoSuccess(data) {
    return {
        type: 'historico/GET_HISTORICO_SUCCESS',
        payload: { data }
    }
}