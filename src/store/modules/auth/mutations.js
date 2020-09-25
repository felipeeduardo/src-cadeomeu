import * as types from './mutation-types'

const mutations = {
    [types.AUTH_SUCCESS](state, auth) {
        state.auth = auth
    },
    [types.AUTH_ERROR](state, auth) {
        state.auth = auth
    },
    [types.AUTH_DESTROY](state, auth) {
        state.auth = auth
    }
}

export default mutations