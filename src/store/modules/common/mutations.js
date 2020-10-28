import * as types from './mutation-types'
const mutations = {
    [types.TYPE_COMMON_SUCCESS](state, types) {
        state.types = types
    },
    [types.TYPE_COMMON_ERROR](state, types) {
        state.types = types
    }
}

export default mutations