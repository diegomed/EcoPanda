export var BASE_URL_API = 'http://192.168.0.44:3000/api/';
import axios from 'axios';

const server = axios.create({
    baseURL: BASE_URL_API,
    timeout: 1000,
});


export const get = (url: string, params = {}) => {
    return server.get(url, { params });
};

export const post = async (url, body = {}, params = {}, cb?: any): Promise<any> => {
    return server.post(url, body, { params });
};

export const patch = async (url, body = {}, params = {}) => {
    return server.patch(url, body, { params });
};

export const put = async (url, body = {}, params = {}) => {
    return server.put(url, body, { params });
};

export const erase = async (url, params = {}) => {
    return server.delete(url, { params });
};

export default server;