import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import MainComponent from '@/components/main/Main.vue'
import {IRouter} from "@/router/router";
import {homeName} from "@/config/config.constant";

Vue.use(VueRouter);

const routes: IRouter[] = [
    {
        path: '/',
        name: homeName,
        component: MainComponent,
        meta: {
            title: "首页",
            hideInMenu: false,
            icon: 'md-home',
            component: Home,
        }
    },
    {
        path: '/about',
        name: 'About',
        component: MainComponent,
        meta: {
            title: '关于',
            hideInMenu: false,
            icon: 'md-home',
            component: About
        },
        children: [
            {
                path: '/book',
                name: 'book',
                component: MainComponent,
                meta: {
                    title: '书籍',
                    hideInMenu: false,
                    icon: 'ios-book',
                    component: About
                }
            }, {
                path: '/data',
                name: 'data',
                component: MainComponent,
                meta: {
                    title: '数据',
                    hideInMenu: false,
                    icon: 'md-home',
                    component: About
                }
            },
        ]
    }
];

const router = new VueRouter({
    routes
});

export {routes};
export default router;
