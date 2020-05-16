import {browserStorageKey} from "@/config/config.constant";
import {IUserDetail} from "@/components/login/user";

/**
 * 从存储中获取用户信息
 */
export const getUserDetail = () => {
    let userDetail: IUserDetail = {};
    const userJson = localStorage.getItem(browserStorageKey);
    if (userJson) {
        userDetail = JSON.parse(userJson);
    }
    return userDetail;
};


