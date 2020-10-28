import * as types from './mutation-types'
const mutations = {
    [types.STOCK_SUCCESS](state, stock) {
        state.stock = stock
    },
    [types.STOCK_ERROR](state, stock) {
        state.stock = stock
    }
}

export default mutations