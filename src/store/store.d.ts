import StoreMenuConstant from "@/store/menu.constant";
import {IUserDetail} from "@/components/login/user";
import StoreUserConstant from "@/store/user.costant";

export interface IState {
    [StoreMenuConstant.moduleName]: IAPPState,
    [StoreUserConstant.moduleName]: IUserState,
}

export interface IAPPState {
    menuList?: any[];
    breadCrumbList?: any;
    cacheList?: any[];
}

export interface IUserState {
    user?: IUserDetail;
}