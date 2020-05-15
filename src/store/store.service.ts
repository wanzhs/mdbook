import {IRouter} from "@/router/router";
import {IMenuInfo} from "@/components/menu/menu";
import {summary} from "@/config/config.constant";
import showdown from 'showdown';

export const getMenuByRouter = (list: IRouter[]) => {
    const res: IMenuInfo[] = [];
    list.forEach(item => {
        if (item.meta && item.meta.title && !item.meta.hideInMenu) {
            const menu: IMenuInfo = {
                name: item.name,
                title: item.meta.title,
                icon: item.meta.icon,
            };
            if (item.children && item.children.length > 0) {
                menu.children = getMenuByRouter(item.children);
            }
            res.push(menu);
        }
    });
    return res;
};

export const getBreadCrumbListByName = (list: IRouter[], name: string) => {
    let res: string[] = [];
    list.forEach(item => {
        if (item.name === name) {
            if (!item.meta || !item.meta.hideInBread) {
                res.push(item.meta && item.meta.title || item.name);
            }
        }
        if (item.children && item.children.length > 0) {
            let sub_res = getBreadCrumbListByName(item.children, name);
            if (sub_res && sub_res.length > 0) {
                sub_res.push(item.meta && item.meta.title || item.name);
                res = sub_res;
            }
        }
    });
    return res;
};

export const getRoutePathByName = (list: IRouter[], name: string) => {
    let path: string = "";
    list.forEach(item => {
        if (item.name === name) {
            path = <string>item.redirect || item.path;
        }
        if (item.children && item.children.length > 0) {
            const route_path = getRoutePathByName(item.children, name)
            if (route_path) {
                path = route_path;
            }
        }
    });
    return path;
};

export const getCacheList = (list: IRouter[]) => {
    let res: string[] = [];
    list.forEach(item => {
        if (!item.meta || !item.meta.notCache) {
            res.push(item.name);
        }
        if (item.children && item.children.length > 0) {
            let sub_res = getCacheList(item.children);
            if (sub_res && sub_res.length > 0) {
                sub_res.push(item.name);
                res = sub_res;
            }
        }
    });
    return res;
};
