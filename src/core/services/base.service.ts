import server from "./interceptor.service";
import { AxiosError, AxiosResponse, AxiosPromise } from "axios";


export const get =  (url: string, params = {}): AxiosPromise =>  {
    return new Promise((resolve, reject) => {
        server.get(url, { params })
            .then(function (response: AxiosResponse) {
                // handle success
                resolve(response.data);
            })
            .catch(function (error: AxiosError) {
                // handle error
                reject(error.response);
            })
    })
};

export const post = async (url: string, body = {}, params = {}, cb?: any): Promise<any> => {
    return server.post(url, body, { params });
};

export const patch = async (url: string, body = {}, params = {}) => {
    return server.patch(url, body, { params });
};

export const put = async (url: string, body = {}, params = {}) => {
    return server.put(url, body, { params });
};

export const erase = async (url: string, params = {}) => {
    return server.delete(url, { params });
};


export default server;