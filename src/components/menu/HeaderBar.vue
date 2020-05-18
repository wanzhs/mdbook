<template>
    <Row type="flex" justify="start">
        <Col span="1" align="left">
            <Icon @click.native="collapsedSider" :style="{margin: '0 -40px'}"
                  type="md-menu" size="24"></Icon>
        </Col>
        <Col span="22">

        </Col>
        <Col span="1" align="right">
            <Dropdown v-if="userDetail && userDetail.userName">
                <a href="javascript:void(0)">
                    {{userDetail.userName}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem @click.native="userLogout">退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
    </Row>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {getMenuByRouter, removeUserLocalStorage} from "@/store/store.service";
    import {homeName} from "@/config/config.constant";
    import {Getter, Mutation} from "vuex-class";
    import StoreUserConstant from "@/store/user.costant";
    import {IUserDetail} from "@/components/login/user";
    import StoreMenuConstant from "@/store/menu.constant";
    import {IMenuInfo} from "@/components/menu/menu";
    import {routes} from "@/router";

    @Component
    export default class HeaderBar extends Vue {
        @Prop(Function) collapsedSider!: () => void;
        @Getter(`${StoreUserConstant.moduleName}/${StoreUserConstant.getter().GetUserDetail}`)
        readonly userDetail!: IUserDetail;
        @Mutation(`${StoreMenuConstant.moduleName}/${StoreMenuConstant.mutation().SetMenuList}`)
        setMenuList!: (menuList: IMenuInfo[]) => void;
        @Mutation(`${StoreUserConstant.moduleName}/${StoreUserConstant.mutation().SetUserDetail}`)
        public setUserDetail!: (userDetail: IUserDetail) => void;

        userLogout() {
            removeUserLocalStorage();
            this.setUserDetail({});
            this.setMenuList(getMenuByRouter(routes, []));
            this.$router.push({name: homeName});
        }
    }
</script>

<style scoped>

</style>