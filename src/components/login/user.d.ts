/**
 * 登录用户信息
 */
export interface IUserDetail {
    userId?: number;
    userName?: string;
    userAccount?: string;
    userPassword?: string;
    accessToken?: string;
    permissions?: string[];
}

/**
 * 请求结果封装
 */
export interface IResponseData<T = any> {
    data?: T;
    message?: string;
    code?: number;
}

/**
 * 表单处理类
 */
export class IForm<T> {
    handleSubmit: () => void;
}

export interface IBasePagination {
    index?: number;
    size?: number;
    data?: any;
}

export interface IPageResult {
    records?: any;
    total?: number;
}