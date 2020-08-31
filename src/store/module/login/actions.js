export function getProfileRequest(id) {
    return {
        type: 'login/GET_PROFILE_REQUEST',
        payload: { id },
    }
}

export function getProfileSuccess(data) {
    return {
        type: 'login/GET_PROFILE_SUCCESS',
        payload: { data }
    }
}