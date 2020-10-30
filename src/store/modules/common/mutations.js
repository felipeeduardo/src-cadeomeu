import * as types from './mutation-types'
const mutations = {
    [types.TYPE_COMMON_SUCCESS](state, types) {
        state.types = types
    },
    [types.TYPE_COMMON_ERROR](state, types) {
        state.types = types
    },
    [types.CARTE_COMMON_SUCCESS](state, cartes) {
        state.cartes = cartes
    },
    [types.CARTE_COMMON_ERROR](state, cartes) {
        state.cartes = cartes
    }
}

export default mutations