const mutation = {
    SetUserDetail: 'SET_USER_DETAIL',
};
const getter = {
    GetUserDetail: 'GET_USER_DETAIL',
};

export default class StoreUserConstant {
    public static readonly moduleName = "USER";
    public static readonly getter = () => getter;
    public static readonly mutation = () => mutation;
}