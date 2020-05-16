<template>
    <div>
        <Modal :title="title" :width="width" :draggable="draggable" :value="visible"
               :loading="loading"
               footer-hide
               @on-cancel="handleCancel"
               :mask-closable="false">
            <slot name="default"></slot>
            <template v-slot:close v-if="showAlways">
                <span></span>
            </template>
            <template v-slot:header v-if="showAlways">
                <div align="center">
                    {{title}}
                </div>
            </template>
        </Modal>
    </div>
</template>

<script lang="ts">
    import {Component, Model, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ModalV1 extends Vue {
        @Prop({type: String, default: '标题'}) readonly title!: string;
        @Prop({type: Number, default: 60}) readonly width!: number;
        @Prop({type: Boolean, default: true}) readonly draggable!: boolean;
        @Prop({type: Boolean, default: false}) readonly loading!: boolean;
        @Prop({type: Boolean, default: false}) readonly showAlways!: boolean;
        @Model("visibleChange", {type: Boolean}) readonly visible!: boolean;

        handleCancel() {
            this.$emit("visibleChange", false);
        }
    }
</script>

<style scoped>

</style>