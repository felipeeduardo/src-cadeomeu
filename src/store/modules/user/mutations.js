import * as types from './mutation-types'

const mutations = {
    [types.USER_CREATE_SUCCESS](state, user) {
        state.user = user
    },
    [types.USER_CREATE_ERROR](state, user) {
        state.user = user
    },
    [types.USER_NOTIFICATION_SUCCESS](state, notification) {
        state.notification = notification
    },
    [types.USER_NOTIFICATION_ERROR](state, notification) {
        state.notification = notification
    },
    [types.USER_REPORT_SUCCESS](state, report) {
        state.report = report
    },
    [types.USER_REPORT_ERROR](state, report) {
        state.report = report
    },
    
}

export default mutations