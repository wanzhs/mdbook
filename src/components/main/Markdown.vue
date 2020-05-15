<template>
    <Editor v-model="markdown"
            :on-save="onSave"
            :on-img-add="onImgAdd"
            :on-img-del="onImgDel"/>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import Editor from "@/components/main/Editor.vue";

    @Component({
        components: {Editor}
    })
    export default class Markdown extends Vue {
        @Prop({type: String, default: ""})
        readonly fileName!: string;

        @Watch("fileName")
        public fileNameChange(recv: string, prev: string) {
            this.loadFiles();
        }

        public markdown: string = "";

        onSave(value: string) {
            console.log('save...')

        }

        onImgAdd(fileName: string, file: File) {
            console.log('img add ...' + fileName)
            console.log(fileName)
        }

        onImgDel(fileName: string) {
            console.log('img del ... ' + fileName)
        }

        loadFiles() {
            this.markdown = require('../../md/' + this.fileName);
        }

        mounted() {
            this.loadFiles();
        }
    }
</script>

<style scoped>

</style>