<template>
    <div>
        <Markdown :file-name="$route.params.pathMatch?$route.params.pathMatch:''"/>
    </div>
</template>

<script lang="ts">


    import {Component, Vue} from "vue-property-decorator";
    import Markdown from "@/components/main/Markdown.vue";

    @Component({
        components: {Markdown}
    })
    export default class EditorHome extends Vue {
        public filename: string = "SUMMARY.md";
    }
</script>

