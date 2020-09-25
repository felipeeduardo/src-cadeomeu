import { http } from '../config'

export const postLogin = (data) => {
    return http.post('v1/users/login', data)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}