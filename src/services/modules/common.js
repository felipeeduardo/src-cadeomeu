import { http } from '../config'

//table type
export const getAllTypesUser = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/types/' + data.id_user, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}
//table stock
export const getCarteUser = (data) => {
    return http.get('v1/cartes/' + data)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}
//table customer_order
export const addCustomerOrderClient = (data) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    return http.post('v1/CustomerOrders/', data, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

//table customer_order
export const UpdateCustomerOrderClient = (data) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    return http.put('v1/CustomerOrders/' + data.customer_order_table + '/' + data.client, data, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

//table customer_order
export const getCustomerOrderClient = (data) => {
    return http.get('v1/CustomerOrders/' + data.table + '/' + data.client)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

//table customer_order
export const getOpenTable = (data) => {
    return http.get('v1/CustomerOrders/opentable/' + data.table + '/' + data.client)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}