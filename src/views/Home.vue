<template>
    <div class="home">
        <!--   <HelloWorld msg="你好，helloworld"/>-->
        <div v-html="html"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue";
    import myMarkDown from '@/md/cpu.md'
    import showdown from 'showdown'

    @Component({components: {HelloWorld}})
    export default class Home extends Vue {
        public html: string = "";

        mounted() {
            let converter = new showdown.Converter();
            let text: string = myMarkDown.toString();
            this.html = converter.makeHtml(text);
        }
    }
</script>
