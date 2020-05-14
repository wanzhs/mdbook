<template>
    <div type="flex" style="height: 100%">
        <mavon-editor v-model="markdown"
                      :subfield="true"
                      :toolbarsFlag="true"
                      :editable="true"
                      :scrollStyle="true"
                      :ishljs="true"
        />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue";
    import MyMarkDown from '@/md/cpu.md'
    import showdown from 'showdown'

    @Component({components: {HelloWorld}})
    export default class Home extends Vue {
        public html: string = "";
        public markdown: string = "";

        mounted() {
            let converter = new showdown.Converter();
            this.html = MyMarkDown.toString();
            this.markdown = converter.makeMarkdown(this.html);
        }
    }
</script>
