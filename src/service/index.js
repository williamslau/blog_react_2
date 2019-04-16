import axios from 'axios';

const config = {
    // baseURL,
    timeout: 8000,
    withCredentials: true,
};
const axiosService = axios.create();
axiosService.interceptors.request.use(function (config) {
    // 处理请求之前的配置
    // if (config.method == 'get') {
    //     // config中无data字段时，headers里的Content-Type无效果
    //     config.data = true;
    // }
    return config;
}, function (error) {
    // 请求失败的处理
    return Promise.reject(error);
});
// 响应拦截（配置请求回来的信息）
axiosService.interceptors.response.use(function (response) {
    // 处理响应数据
    return response;
}, function (error) {
    // 处理响应失败
    return error;
});
export function get(url, data) {
    return axiosService({
        ...config,
        method: 'get',
        url,
        params: data,
    }).then(res => res.data);
}
export function post(url, data) {
    return axiosService({
        ...config,
        method: 'post',
        url,
        data,
    }).then(res => res.data);
}
export function put(url, data) {
    return axiosService({
        ...config,
        method: 'put',
        url,
        data,
    }).then(res => res.data);
}
export function del(url, data) {
    return axiosService({
        ...config,
        method: 'delete',
        url,
        data,
    }).then(res => res.data);
}