import {IRouter} from "@/router/router";
import {IMenuInfo} from "@/components/menu/menu";

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
            res.push(item.meta && item.meta.title || item.name);
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