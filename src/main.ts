import Vue from 'vue'
import App from './App.vue'
import router, {routes} from './router'
import store from './store'
import ViewUI from 'view-design'
import Editor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import 'view-design/dist/styles/iview.css'
import './assets/css/iview.less'
import StoreMenuConstant from "@/store/menu.constant";
import {getBreadCrumbListByName, getCacheList, getMenuByRouter} from "@/store/store.service";
import {homeName} from "@/config/config.constant";

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
    render: h => h(App)
}).$mount('#app');
