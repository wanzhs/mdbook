<template>
    <MenuItem v-if="!showChildren(menu)" :name="getName(menu)" align="left">
        <Icon :type="menu.icon"/>
        <span>{{showTitle(menu)}}</span>
    </MenuItem>
    <Submenu v-else :name="getName(menu)" align="left">
        <template slot="title">
            <Icon :type="menu.icon"/>
            {{showTitle(menu)}}
        </template>
        <template v-for="sub_menu in menu.children">
            <SideMenu :menu="sub_menu"/>
        </template>
    </Submenu>
</template>

<script lang="ts">
    import {Component, Mixins, Prop} from "vue-property-decorator";
    import MenuMixin from "./MenuMixin";
    import {IMenuInfo} from "./menu";

    @Component
    export default class SideMenu extends Mixins(MenuMixin) {
        @Prop(Object) readonly menu!: IMenuInfo;
    }
</script>

<style scoped>

</style>