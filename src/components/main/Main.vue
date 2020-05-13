<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider ref="side1" collapsible hide-trigger :width="256" :collapsed-width="64" v-model="collapsed">
                <Menu theme="dark" width="auto" @on-select="handleMenuItemClick" @on-open-change="handleSubMenuClick">
                    <template v-for="menu in menuList">
                        <SideMenu :menu="menu"/>
                    </template>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}" align="left">
                    <Icon @click.native="collapsedSider" :style="{margin: '0 -40px'}"
                          type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}" align="left">
                        <BreadcrumbItem v-for="item in breadCrumbList">{{item}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Card style="height: 90%;" id="sub_app">
                        <keep-alive :include="cacheList">
                            <router-view/>
                        </keep-alive>
                    </Card>
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

    @Component({
        components: {SideMenu}
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

        public collapsedSider() {
            //@ts-ignore
            this.$refs.side1.toggleCollapse();
        }

        handleSubMenuClick(names: string[]) {
            if (names && names.length > 0) {
                this.handleMenuItemClick(names[0]);
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