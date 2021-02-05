import * as types from './mutation-types'

const mutations = {
    [types.SET_LOADING](state, loading) {
        state.loading = loading
    },
    [types.SET_LOADING_CUSTOMER_ORDER](state, loadingCustomerOrder) {
        state.loadingCustomerOrder = loadingCustomerOrder
    },
}

export default mutations