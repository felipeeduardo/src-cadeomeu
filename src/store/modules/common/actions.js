import * as common_types from '@/services/modules/common'
import * as types from './mutation-types'

export const getTypes = ({ commit }, data) => {
    return common_types.getAllTypesUser(data)
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
    return common_types.getCarteUser(data)
        .then(result => {
            commit(types.CARTE_COMMON_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.CARTE_COMMON_ERROR, err)
            return Promise.reject(err)
        })
}