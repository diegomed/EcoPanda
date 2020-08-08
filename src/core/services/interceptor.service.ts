import server from "./base.service";

server.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        // Store de redux para activar spinner
        return config;
    }, 
    (error) => {
        // Do something with request error
        // Apagar el spinner
        return Promise.reject(error);
    }
);

// Add a response interceptor
server.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // Apagar el spinner
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // Apagar el spinner
        return Promise.reject(error);
    }
);