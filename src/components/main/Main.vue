<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider ref="side1" collapsible hide-trigger :width="256" :collapsed-width="0" v-model="collapsed">
                <Menu theme="light" width="auto" @on-select="handleMenuItemClick" @on-open-change="handleSubMenuClick">
                    <template v-for="menu in menuList">
                        <SideMenu :menu="menu"/>
                    </template>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <HeaderBar :collapsed-sider="collapsedSider"/>
                </Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}" align="left">
                        <BreadcrumbItem v-for="item in breadCrumbList">{{item}}</BreadcrumbItem>
                    </Breadcrumb>
                    <div style="height: 90%;">
                        <keep-alive :include="cacheList">
                            <router-view/>
                        </keep-alive>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">

    import {Component, Mixins} from "vue-property-decorator";
    import MenuMixin from "@/components/menu/MenuMixin";
    import './main.less'
    import {Getter, Mutation} from "vuex-class";
    import StoreMenuConstant from "@/store/menu.constant";
    import {IMenuInfo} from "@/components/menu/menu";
    import SideMenu from "@/components/menu/SideMenu.vue";
    import {getBreadCrumbListByName, getRoutePathByName} from "@/store/store.service";
    import {routes} from "@/router";
    import HeaderBar from "@/components/menu/HeaderBar.vue";

    @Component({
        components: {HeaderBar, SideMenu}
    })
    export default class Main extends Mixins(MenuMixin) {
        public collapsed: boolean = false;
        @Getter(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.getter().GetMenuList}`)
        public menuList!: IMenuInfo[];
        @Getter(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.getter().GetBreadCrumbList}`)
        public breadCrumbList!: string[];
        @Getter(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.getter().GetCacheList}`)
        public cacheList!: string[];
        @Mutation(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.mutation().SetBreadCrumbList}`)
        public setBreadCrumbs!: (crumbList: any) => void;
        public depth: number = 1;

        public collapsedSider() {
            //@ts-ignore
            this.$refs.side1.toggleCollapse();
        }

        handleSubMenuClick(names: string[]) {
            if (names && names.length > 0) {
                this.handleMenuItemClick(names[names.length - 1]);
            }
        }

        handleMenuItemClick(name: string) {
            const crumb = getBreadCrumbListByName(routes, name);
            const routePath = getRoutePathByName(routes, name);
            if (crumb && crumb.length > 0) {
                this.setBreadCrumbs(crumb.reverse());
            }
            if (routePath !== this.$route.path) {
                this.$router.push({name: name});
            }
        }
    }
</script>

<style scoped>
</style>