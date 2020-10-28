import { http } from '../config'

export const get = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/stocks/' + data.id_user, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const add = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };

    const data_add = {
        'id_user': data.id_user,
        'id_type': data.id_type,
        'product': data.product,
        'description': data.description,
        'accompaniment': data.accompaniment,
        'price': data.price,
        'qtd': parseInt(data.count)
    };
    console.log(data_add)
    return http.post('v1/stocks', data_add, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const update = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.put('v1/stocks/' + data.id_stock, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}


export const del = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.delete('v1/stocks/' + data.id_stock, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}
