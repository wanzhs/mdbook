<template>
    <div class="home">
        <!--   <HelloWorld msg="你好，helloworld"/>-->
        <my-mark-down/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue";
    //@ts-ignore
    import myMarkDown from '@/md/cpu.md'

    @Component({components: {HelloWorld, myMarkDown}})
    export default class Home extends Vue {

    }
</script>
