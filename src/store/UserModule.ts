import {GetterTree, Module, MutationTree} from "vuex";
import {IState, IUserState} from "@/store/store";
import StoreUserConstant from "@/store/user.costant";
import {IUserDetail} from "@/components/login/user";
import {browserStorageKey} from "@/config/config.constant";

const getters: GetterTree<IUserState, IState> = {
    [StoreUserConstant.getter().GetUserDetail]: (state, getters, rState, rGetters) => {
        if (!state.user) {
            const userJson = localStorage.getItem(browserStorageKey);
            if (userJson) {
                state.user = JSON.parse(userJson)
            }
        }
        return state.user;
    }
};

const mutations: MutationTree<IUserState> = {
    [StoreUserConstant.mutation().SetUserDetail]: (state: IUserState, payload: IUserDetail) => {
        state.user = payload;
        localStorage.setItem(browserStorageKey, JSON.stringify(payload));
    }
};
const UserModule: Module<IUserState, IState> = {
    namespaced: true,
    getters: getters,
    mutations: mutations,
    state: {
        user: {}
    }
};

export default UserModule;