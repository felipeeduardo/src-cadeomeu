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
    },
    [types.CUSTOMERORDER_COMMON_SUCCESS](state, customerOrders) {
        state.customerOrders = customerOrders
    },
    [types.CUSTOMERORDER_COMMON_ERROR](state, customerOrders) {
        state.customerOrders = customerOrders
    },
    [types.DEMANDCLIENT_COMMON_SUCCESS](state, demandClient) {
        state.demandClient = demandClient
    },
    [types.DEMANDCLIENT_COMMON_ERROR](state, demandClient) {
        state.demandClient = demandClient
    }
}

export default mutations