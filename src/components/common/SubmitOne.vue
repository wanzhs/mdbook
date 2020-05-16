<template>
    <div align="center">
        <Button type="primary" @click.native="handleSubmitClick">提交</Button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class SubmitOne extends Vue {
        @Prop(Function)
        handleSubmitClick!: () => void;
    }
</script>

<style scoped>

</style>