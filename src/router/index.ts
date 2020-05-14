import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import MainComponent from '@/components/main/Main.vue'
import {IRouter} from "@/router/router";
import {homeName} from "@/config/config.constant";
import Book from "@/views/Book.vue";
import Data from "@/views/Data.vue";
import Love from "@/views/Love.vue";
import Joy from "@/views/Joy.vue";
import Peace from "@/views/Peace.vue";

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
                path: 'home',
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
        redirect: '/_about/about',
        component: MainComponent,
        meta: {
            title: '关于',
            hideInMenu: false,
            icon: 'md-home',
        },
        children: [
            {
                path: 'about',
                name: 'About',
                component: About,
                meta: {
                    hideInMenu: true,
                    hideInBread: true,
                }
            },
            {
                path: 'book',
                name: 'Book',
                component: Book,
                meta: {
                    title: '书籍',
                    hideInMenu: false,
                    icon: 'ios-book',
                },
                children: [
                    {
                        path: 'peace',
                        name: 'peace',
                        component: Peace,
                        meta: {
                            title: '和平',
                            hideInMenu: false,
                            notCache: true,
                        },
                        children: [
                            {
                                path: 'kind',
                                name: 'kind',
                                component: Data,
                                meta: {
                                    title: "慈爱",
                                    hideInMenu: false,
                                    notCache: true
                                }
                            },
                            {
                                path: 'rejoice',
                                name: 'rejoice',
                                component: Home,
                                meta: {
                                    title: "愉悦",
                                    hideInMenu: false,
                                    notCache: true
                                },
                                children: [
                                    {
                                        path: 'goodness',
                                        name: 'goodness',
                                        component: Book,
                                        meta: {
                                            title: "良善",
                                            hideInMenu: false,
                                            notCache: false,
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'love',
                        name: 'love',
                        component: Love,
                        meta: {
                            title: '仁爱',
                            hideInMenu: false,
                            notCache: true,
                        }
                    },
                    {
                        path: 'joy',
                        name: 'joy',
                        component: Joy,
                        meta: {
                            title: '喜乐',
                            hideInMenu: false,
                            notCache: true,
                        }
                    }
                ]
            }, {
                path: 'data',
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

router.beforeEach((to, from, next) => {
    if (to.matched.length > 2) {
        to.matched.splice(1, to.matched.length - 2);
    }
    next();
});

export {routes};
export default router;
