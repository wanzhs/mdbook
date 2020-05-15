<template>
    <Markdown :file-name="filename"/>
</template>

<script lang="ts">


    import {Component, Vue} from "vue-property-decorator";
    import Markdown from "@/components/main/Markdown.vue";

    @Component({
        components: {Markdown}
    })
    export default class Home extends Vue {
        public filename: string = "cpu.md";
    }
</script>

