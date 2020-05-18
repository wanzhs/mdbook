import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/views/About.vue";
import MainComponent from '@/components/main/Main.vue'
import {IRouter} from "@/router/router";
import {homeName, loginName} from "@/config/config.constant";
import Book from "@/views/Book.vue";
import Data from "@/views/Data.vue";
import Love from "@/views/Love.vue";
import Joy from "@/views/Joy.vue";
import Peace from "@/views/Peace.vue";
import EditorMain from "@/components/main/EditorMain.vue";
import EditorHome from "@/views/EditorHome.vue";
import LoginHome from "@/components/login/LoginHome.vue";
import {IUserDetail} from "@/components/login/user";
import {getUserDetail} from "@/components/login/user.service";
import BookList from '@/views/book/BookList.vue';
import {showThisMenu} from "@/store/store.service";

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
                component: BookList,
            },
        ]
    },
    {
        path: '/login',
        name: loginName,
        component: LoginHome,
        meta: {
            hideInMenu: true,
            hideInBread: true
        }
    },
    {
        path: '/markdown',
        name: 'markdown',
        component: EditorMain,
        meta: {
            title: '富文本编辑器',
            hideInMenu: true,
            requireAuth: true,
        },
        children: [
            {
                path: '*',
                name: 'markdown-children',
                component: EditorHome,
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
            requireAuth: true,
        },
        children: [
            {
                path: 'about',
                name: 'About',
                component: About,
                meta: {
                    hideInMenu: true,
                    hideInBread: true,
                    requireAuth: true,
                }
            },
            {
                path: 'book',
                name: 'Book',
                component: Book,
                meta: {
                    title: '书籍',
                    hideInMenu: false,
                    requireAuth: true,
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
                            requireAuth: true,
                        }
                    },
                    {
                        path: 'love',
                        name: 'love',
                        component: Love,
                        meta: {
                            title: '仁爱',
                            hideInMenu: false,
                            notCache: true,
                            requireAuth: true,
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
                            requireAuth: true,
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
                    requireAuth: true,
                    access: ['data']
                }
            },
        ]
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    //路由拦截，判断该页面是否需要认证
    if (to.meta && to.meta.requireAuth) {
        const userDetail: IUserDetail = getUserDetail();
        if (!userDetail.userId) {
            router.push({name: loginName}).then();
            return;
        }
    }
    //权限拦截
    const userDetail: IUserDetail = getUserDetail();
    const perms = (userDetail && userDetail.permissions) || [];
    if (!showThisMenu(<IRouter>to, perms)) {
        router.push({name: homeName}).then();
    }

//实现多级菜单功能
    if (to.matched.length > 2) {
        to.matched.splice(1, to.matched.length - 2);
    }
    next();
});

export {routes};
export default router;
