import * as commons from '@/services/modules/common'
import * as types from './mutation-types'

export const getTypes = ({ commit }, data) => {
    return commons.getAllTypesUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.TYPE_COMMON_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.TYPE_COMMON_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.TYPE_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}

export const getCartes = ({ commit }, data) => {
    return commons.getCarteUser(data)
        .then(result => {
            commit(types.CARTE_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.CARTE_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}

export const addCustomerOrder = ({ commit }, data) => {
    return commons.addCustomerOrderClient(data)
        .then(result => {
            commit(types.CUSTOMERORDER_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.CUSTOMERORDER_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}

export const UpdateCustomerOrder = ({ commit }, data) => {
    return commons.UpdateCustomerOrderClient(data)
        .then(result => {
            commit(types.CUSTOMERORDER_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.CUSTOMERORDER_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}

export const getCustomerOrderUser = ({ commit }, data) => {
    return commons.getAllCustomerOrderUser(data)
        .then(result => {
            commit(types.CUSTOMERORDERALLUSER_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.CUSTOMERORDERALLUSER_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}

export const getCustomerOrder = ({ commit }, data) => {
    return commons.getCustomerOrderClient(data)
        .then(result => {
            commit(types.DEMANDCLIENT_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.DEMANDCLIENT_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}

export const getVeryfyOpenTable = ({ commit }, data) => {
    return commons.getOpenTable(data)
        .then(result => {
            commit(types.VERIFYOPENTABLE_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.VERIFYOPENTABLE_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}
