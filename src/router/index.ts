import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import MainComponent from '@/components/main/Main.vue'
import {IRouter} from "@/router/router";
import {homeName} from "@/config/config.constant";
import Book from "@/views/Book.vue";
import Data from "@/views/Data.vue";
import Peace from "@/views/Peace.vue";
import Love from "@/views/Love.vue";
import Joy from "@/views/Joy.vue";

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
                component: Home,
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
                },
                children: [
                    {
                        path: '/peace',
                        name: 'peace',
                        component: Peace,
                        meta: {
                            title: '和平',
                            hideInMenu: false,
                        }
                    },
                    {
                        path: '/love',
                        name: 'love',
                        component: Love,
                        meta: {
                            title: '仁爱',
                            hideInMenu: false,
                        }
                    },
                    {
                        path: '/joy',
                        name: 'joy',
                        component: Joy,
                        meta: {
                            title: '喜乐',
                            hideInMenu: false,
                        }
                    }
                ]
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
