import Vue from 'vue'
import router, {routes} from './router'
import store from './store'
import App from './App.vue';
import ViewUI from 'view-design'
import Editor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import 'view-design/dist/styles/iview.css'
import './assets/css/iview.less'
import StoreMenuConstant from "@/store/menu.constant";
import {getBreadCrumbListByName, getCacheList, getMenuByRouter} from "@/store/store.service";
import {homeName, mockState} from "@/config/config.constant";
import axios from 'axios';
import VueAxios from 'vue-axios';

/**
 * 根据配置选择是否启用mock模拟数据
 */
mockState && require('./mock/mock');

Vue.use(VueAxios, axios);
Vue.use(Editor);
Vue.use(ViewUI);
Vue.config.productionTip = false;

//初始化保存菜单和首页以及缓存视图列表
store.commit(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.mutation().SetMenuList}`, getMenuByRouter(routes));
store.commit(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.mutation().SetBreadCrumbList}`, getBreadCrumbListByName(routes, homeName));
store.commit(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.mutation().SetCacheList}`, getCacheList(routes));
new Vue({
    router,
    store,
    render: h => h(App),
    el: "#app"
});
// or
// new Vue({
//     router,
//     store,
//     el:"#app",
//     render: h => h(App)
// });