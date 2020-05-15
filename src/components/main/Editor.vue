<template>
    <mavon-editor :value="markdown"
                  :subfield="true"
                  :editable="true"
                  :toolbars="options"
                  @save="onSave"
                  @change="onChange"
                  @imgAdd="onImgAdd"
                  @imgDel="onImgDel"
    />
</template>

<script lang="ts">
    import {Component, Model, Prop, Vue, Watch} from "vue-property-decorator";


    @Component
    export default class Editor extends Vue {
        @Model("markdownChange", {type: String})
        readonly markdown!: string;
        @Prop(Function) onSave!: (value: string) => void;
        @Prop(Function) onImgAdd!: (fileName: string, file: File) => void;
        @Prop(Function) onImgDel!: (fileName: string) => void;

        @Watch("markdown")
        markdownChange(recv: string, prev: string) {
            this.text = this.markdown;
        }

        public text: string = "";
        options: any = {
            bold: true,
            italic: true,
            header: true,
            underline: true,
            strikethrough: true,
            mark: true,
            superscript: true,
            subscript: true,
            quote: true,
            ol: true,
            ul: true,
            link: true,
            imagelink: true,
            code: true,
            table: true,
            undo: true,
            redo: true,
            trash: true,
            save: true,
            alignleft: true,
            aligncenter: true,
            alignright: true,
            // navigation: true,
            // subfield: true,
            // fullscreen: true,
            // readmodel: true,
            // htmlcode: true,
            help: true,
            preview: true
        };

        public onChange(value: string) {
            this.$emit("markdownChange", value);
        }
    }
</script>

<style scoped>

</style>