/*
* 本组件为中间件，当为多级菜单时作为中间菜单的组件，即可实现多级菜单功能
*/
<template>
    <router-view/>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class CenterView extends Vue {

    }
</script>

<style scoped>

</style>