import * as user from '@/services/modules/user'
import * as types from './mutation-types'

export const newUser = ({ commit }, data) => {
    return user.postNewUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.USER_CREATE_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.USER_CREATE_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.USER_CREATE_ERROR, err)
            return Promise.reject(err)
        })
}

export const notificationUser = ({ commit }, data) => {
    return user.getNotificationUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.USER_NOTIFICATION_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.USER_NOTIFICATION_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.USER_NOTIFICATION_ERROR, err)
            return Promise.reject(err)
        })
}

export const newReport = ({ commit }, data) => {
    return user.postNewReportUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.USER_REPORT_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.USER_REPORT_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.USER_REPORT_ERROR, err)
            return Promise.reject(err)
        })
}