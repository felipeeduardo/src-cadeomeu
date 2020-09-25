import axios from 'axios'
import store from '@/store';
import * as types from '@/store/mutation-types'

export const http = axios.create({
    baseURL: 'https://hawinsoft.azurewebsites.net/api/'
})

//IMTERCEPTORS
http.interceptors.request.use(config => {
    store.commit(types.SET_LOADING, true);
    return config;
}, error => {
    store.commit(types.SET_LOADING, false);
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
    store.commit(types.SET_LOADING, false);
    return response;
}, error => {
    store.commit(types.SET_LOADING, false);
    return Promise.reject(error);
});

export default http;