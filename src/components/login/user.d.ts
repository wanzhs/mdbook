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
 * 表单处理类
 */
export class IForm<T> {
    handleSubmit: () => void;
}