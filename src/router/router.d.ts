import {RouteConfig} from "vue-router";

export interface IRouter extends RouteConfig {
    path: string;
    name: string;
    meta?: IMetaData;
    children?: IRouter[];
}

export interface IMetaData {
    title?: string;
    icon?: string;
    notCache?: boolean;
    access?: string[];
    hideInMenu?: boolean;
    hideInBread?: boolean;
    requireAuth?: boolean;
}