import axios from 'axios'
import store from '@/store';
import * as types from '@/store/mutation-types'

export const http = axios.create({
    baseURL: 'https://cadeomeu.azurewebsites.net/api/'
})

//IMTERCEPTORS
http.interceptors.request.use(config => {
    const url = config.url;
    const urlLength = url.split('/').length;
    const urlMethod = url.split('/')[1];

    if (urlLength == 3 && urlMethod == "CustomerOrders") {
        store.commit(types.SET_LOADING_CUSTOMER_ORDER, true);
    } else {
        store.commit(types.SET_LOADING, true);
    }
    return config;
}, error => {
    store.commit(types.SET_LOADING, false);
    store.commit(types.SET_LOADING_CUSTOMER_ORDER, false);
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
    const url = response.config.url;
    const urlLength = url.split('/').length;
    const urlMethod = url.split('/')[1];

    if (urlLength == 3 && urlMethod == "CustomerOrders") {
        store.commit(types.SET_LOADING_CUSTOMER_ORDER, false);
    } else {
        store.commit(types.SET_LOADING, false);
    }
    return response;
}, error => {
    store.commit(types.SET_LOADING, false);
    return Promise.reject(error);
});

export default http;