<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Button type="primary">Primary</Button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class About extends Vue {

    }
</script>
