import {browserStorageKey} from "@/config/config.constant";
import {IUserDetail} from "@/components/login/user";
import RequestCarrier from "@/utils/requist";

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

export default class UserService {
    public static userLogin = (query: IUserDetail) => {
        return RequestCarrier.post_json('/user/login', query);
    }
}