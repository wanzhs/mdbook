import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import MainComponent from '@/components/main/Main.vue'
import {IRouter} from "@/router/router";
import {homeName} from "@/config/config.constant";
import Book from "@/views/Book.vue";
import Data from "@/views/Data.vue";

Vue.use(VueRouter);

const routes: IRouter[] = [
    {
        path: '/',
        redirect: '/home',
        name: '_home',
        component: MainComponent,
        meta: {
            title: "首页",
            hideInMenu: false,
            icon: 'md-home',
        },
        children: [
            {
                path: '/home',
                name: homeName,
                meta: {
                    hideInMenu: true,
                    hideInBread: true,
                },
                component: Home
            }
        ]
    },
    {
        path: '/_about',
        name: '_about',
        redirect: '/about',
        component: MainComponent,
        meta: {
            title: '关于',
            hideInMenu: false,
            icon: 'md-home',
        },
        children: [
            {
                path: '/about',
                name: 'About',
                component: About,
                meta: {
                    hideInMenu: true,
                    hideInBread: true,
                }
            },
            {
                path: '/book',
                name: 'Book',
                component: Book,
                meta: {
                    title: '书籍',
                    hideInMenu: false,
                    icon: 'ios-book',
                }
            }, {
                path: '/data',
                name: 'Data',
                component: Data,
                meta: {
                    title: '数据',
                    hideInMenu: false,
                    icon: 'md-home',
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
