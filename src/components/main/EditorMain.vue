<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider ref="side2" collapsible hide-trigger :width="256" :collapsed-width="64" v-model="collapsed">
                <Scroll :height="scrollHeight">
                    <mavon-editor v-html="html"/>
                </Scroll>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}" align="left">
                    <Icon @click.native="collapsedSider" :style="{margin: '0 -40px'}"
                          type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{padding: '0 16px 16px'}">
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
    import {markdownRoute, summary} from "@/config/config.constant";
    import showdown from "showdown";
    import Markdown from "@/components/main/Markdown.vue";

    @Component({
        components: {Markdown, SideMenu}
    })
    export default class EditorMain extends Mixins(MenuMixin) {
        public collapsed: boolean = false;
        @Getter(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.getter().GetMenuList}`)
        public menuList!: IMenuInfo[];
        @Getter(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.getter().GetBreadCrumbList}`)
        public breadCrumbList!: string[];
        @Getter(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.getter().GetCacheList}`)
        public cacheList!: string[];
        @Mutation(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.mutation().SetBreadCrumbList}`)
        public setBreadCrumbs!: (crumbList: any) => void;
        public scrollHeight: number = window.innerHeight;
        public html: string = "";

        public collapsedSider() {
            //@ts-ignore
            this.$refs.side2.toggleCollapse();
        }

        mounted() {
            const summaryMd = require('../../md/' + summary);
            let converter = new showdown.Converter();
            const summaryHtml = converter.makeHtml(summaryMd);
            this.html = summaryHtml;
            this.html = this.html.replace(new RegExp('<a href="', 'g'), '<a href="#' + markdownRoute + '/')
        }
    }
</script>

<style scoped>
</style>