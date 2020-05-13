const mutation = {
    SetBreadCrumbList: 'SET_BREAD_CRUMB_LIST',
    SetMenuList: 'SET_MENU_LIST',
};
const getter = {
    GetMenuList: 'GET_MENU_LIST',
    GetBreadCrumbList: 'GET_BREAD_CRUMB_LIST'
};
export default class StoreMenuConstant {
    public static readonly moduleName = 'MENU';
    public static readonly mutation = () => mutation;
    public static readonly getter = () => getter;
}