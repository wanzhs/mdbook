<template>
    <Page :total="total" show-sizer show-elevator show-total size="small"
          @on-change="onPageIndexChange"
          @on-page-size-change="onPageSizeChange"
    >
    </Page>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Pagination extends Vue {
        @Prop({
            type: Number,
            default: 0
        }) readonly total!: number;
        @Prop({
            type: Function,
            default: () => {
            },
        }) onPageIndexChange!: (index: number) => void;
        @Prop({
            type: Function,
            default: () => {
            }
        }) onPageSizeChange!: (size: number) => void;
    }
</script>

<style scoped>

</style>