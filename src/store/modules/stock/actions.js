import * as stock from '@/services/modules/stock'
import * as types from './mutation-types'

export const createStock = ({ commit }, data) => {
    return stock.add(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.STOCK_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.STOCK_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.STOCK_ERROR, err)
            return Promise.reject(err)
        })
}

export const updateStock = ({ commit }, data) => {
    return stock.update(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.STOCK_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.STOCK_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.STOCK_ERROR, err)
            return Promise.reject(err)
        })
}

export const deleteStock = ({ commit }, data) => {
    return stock.del(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.STOCK_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.STOCK_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.STOCK_ERROR, err)
            return Promise.reject(err)
        })
}

export const getStock = ({ commit }, data) => {
    return stock.get(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.STOCK_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.STOCK_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.STOCK_ERROR, err)
            return Promise.reject(err)
        })
}