import Vue from 'vue'
import Vuex, {ModuleTree, StoreOptions} from 'vuex'
import {IState} from "@/store/store";
import StoreMenuConstant from "@/store/menu.constant";
import AppModule from "@/store/AppModule";

Vue.use(Vuex);

const moduleTree: ModuleTree<IState> = {
    [StoreMenuConstant.moduleName]: AppModule,
};

const storeOption: StoreOptions<IState> = {
    modules: moduleTree,
};

export default new Vuex.Store(storeOption);
