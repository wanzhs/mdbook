import StoreMenuConstant from "@/store/menu.constant";

export interface IState {
    [StoreMenuConstant.moduleName]: IAPPState;
}

export interface IAPPState {
    menuList?: any[];
    breadCrumbList?: any;
}