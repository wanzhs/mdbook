<template>
    <Editor v-model="markdown"
            :on-save="onSave"
            :on-img-add="onImgAdd"
            :on-img-del="onImgDel"/>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import showdown from 'showdown'
    import cpu from '@/md/cpu.md'
    import Editor from "@/components/main/Editor.vue";

    @Component({
        components: {Editor}
    })
    export default class Markdown extends Vue {
        @Prop({type: String, default: ""})
        readonly fileName!: string;
        public markdown: string="";

        handleMarkdownChange(markdown: string) {
            this.markdown = markdown;
        }

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

        mounted() {
            let converter = new showdown.Converter();
            const html = cpu.toString();
            this.markdown = converter.makeMarkdown(html);
            console.log(this.markdown)
        }
    }
</script>

<style scoped>

</style>