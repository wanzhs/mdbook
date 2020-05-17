import axios, {AxiosResponse} from 'axios';
import {getUserDetail} from "@/components/login/user.service";
import {IResponseData, IUserDetail} from "@/components/login/user";
import Vue from "vue";
import {mockState} from "@/config/config.constant";

/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
    if (!mockState) {
        config.url = "/api" + config.url;
    }
    const user: IUserDetail = getUserDetail();
    if (user.userAccount) {
        config.headers['Access-Token'] = user.accessToken;
        config.headers['Client-Digest'] = user.userAccount;
    }
    return config;
});

/**
 * 响应拦截器
 */
axios.interceptors.response.use((value: AxiosResponse<any>) => {
    if (value.status === 200) {
        if (value.data.code !== 0) {
            //全局异常捕获提示
            // Vue.prototype.$Message.warning(value.data.message);
        }
        return value.data;
    }
}, (error: any) => {
    Vue.prototype.$Message.warning("网络错误");
    return Promise.reject(error);
});

window.addEventListener('unhandledrejection', e => {
    console.log("unhandledrejection error.....");
    console.log(e);
});

window.addEventListener('error', e => {
    console.log("window.addEventListener error...");
    console.log(e);
});
window.onerror = (event, source, lineno, colno, error) => {
    console.log("window.onError ...");
    console.log('捕获到异常：', {event, source, lineno, colno, error});
    return true;
};
/**
 * 请求基础函数
 */
export default class RequestCarrier {
    public static post_json = (url: string, data: any) => {
        return axios.post<IResponseData>(url, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    public static post_formData = (url: string, data: any) => {
        return axios.post<IResponseData>(url, data, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
            }
        })
    };
    public static get_data = (url: string, data: any) => {
        const keys: string[] = Object.keys(data);
        let appendix: string = "";
        if (keys && keys.length > 0) {
            keys.forEach(key => {
                if (data[key]) {
                    appendix = appendix ? appendix + "&" + key + "=" + data[key] : key + "=" + data[key];
                }
            });
            if (appendix !== "") {
                url = url + "?" + appendix;
            }
        }
        return axios.get<IResponseData>(url);
    };
}