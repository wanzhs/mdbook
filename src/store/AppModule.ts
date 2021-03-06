import {GetterTree, Module, MutationTree} from "vuex";
import {IAPPState, IState} from "@/store/store";
import StoreMenuConstant from "@/store/menu.constant";
import {getMenuByRouter} from "@/store/store.service";
import {routes} from "@/router";

const mutations: MutationTree<IAPPState> = {
    [StoreMenuConstant.mutation().SetBreadCrumbList](state: IAPPState, payload: any) {
        state.breadCrumbList = payload;
    },
    [StoreMenuConstant.mutation().SetMenuList](state: IAPPState, payload: any) {
        state.menuList = payload;
    },
    [StoreMenuConstant.mutation().SetCacheList](state: IAPPState, payload: any) {
        state.cacheList = payload;
    }
};
const getters: GetterTree<IAPPState, IState> = {
    [StoreMenuConstant.getter().GetMenuList](state, getters1, rootState, rootGetters) {
        if (state.menuList && state.menuList.length > 0) {
            return state.menuList;
        } else {
            return getMenuByRouter(routes);
        }
    },
    [StoreMenuConstant.getter().GetBreadCrumbList](state, getters1, rootState, rootGetters) {
        return state.breadCrumbList;
    },
    [StoreMenuConstant.getter().GetCacheList](state, getters1, rootState, rootGetters) {
        return state.cacheList;
    },
};

const AppModule: Module<IAPPState, IState> = {
    mutations,
    getters,
    state: {
        breadCrumbList: [],
        menuList: [],
        cacheList: [],
    },
    namespaced: true,
};

export default AppModule;