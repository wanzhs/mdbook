import {IRouter} from "@/router/router";
import {IMenuInfo} from "@/components/menu/menu";
import {browserStorageKey} from "@/config/config.constant";

/**
 * 删除用户本地存储信息
 */
export const removeUserLocalStorage = () => {
    localStorage.removeItem(browserStorageKey);
};
/**
 * 根据访问权限数组获取菜单
 * @param list
 */
export const getMenuByRouter = (list: IRouter[], perms: string[]) => {
    const res: IMenuInfo[] = [];
    list.forEach(item => {
        if (item.meta && item.meta.title && !item.meta.hideInMenu) {
            //构建menu
            const menu: IMenuInfo = {
                name: item.name,
                title: item.meta.title,
                icon: item.meta.icon,
            };
            if (item.children && item.children.length > 0) {
                menu.children = getMenuByRouter(item.children, perms);
            }
            //菜单权限
            if (showThisMenu(item, perms)) {
                res.push(menu);
            }
        }
    });
    return res;
};

export const showThisMenu = (item: IRouter, perms: string[]) => {
    if (item.meta) {
        if (item.meta.access && item.meta.access.length > 0) {
            return item.meta.access.some(access => perms.indexOf(access) > -1);
        } else {
            //无权限限制，直接显示
            return true;
        }
    } else {
        //不存在meta直接不显示
        return false;
    }
};
/**
 * 根据名称获取面包屑
 * @param list
 * @param name
 */
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

/**
 * 根据组件名称获取路由信息
 * @param list
 * @param name
 */
export const getRoutePathByName = (list: IRouter[], name: string) => {
    let path: string = "";
    list.forEach(item => {
        if (item.name === name) {
            path = <string>item.redirect || item.path;
        }
        if (item.children && item.children.length > 0) {
            const route_path = getRoutePathByName(item.children, name)
            if (route_path) {
                path = item.path + "/" + route_path;
            }
        }
    });
    return path;
};

/**
 * 获取缓存的视图列表
 * @param list
 */
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
