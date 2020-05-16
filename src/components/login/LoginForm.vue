<template>
    <Form :model="formData" :label-width="120" ref="formRef" :rules="rules">
        <FormItem prop="userAccount" label="用户名">
            <Input placeholder="请输入用户名" v-model="formData.userAccount"></Input>
        </FormItem>
        <FormItem prop="userPassword" label="密码">
            <Input placeholder="请输入密码" v-model="formData.userPassword"></Input>
        </FormItem>
    </Form>
</template>

<script lang="ts">
    import {Component, Prop, Ref, Vue, Watch} from "vue-property-decorator";
    import {IUserDetail} from "@/components/login/user";
    import {Form} from "view-design";

    @Component
    export default class LoginForm extends Vue {
        @Prop(Object) dataSource!: IUserDetail;
        @Prop(Function) onSubmit!: (query: IUserDetail) => void;

        @Watch("dataSource")
        public onDataSourceChange(recv: any, prev: any) {
            if (recv) {
                this.formData = Object.assign({}, recv);
            }
        }

        @Ref("formRef")
        formRef!: Form;
        public formData: IUserDetail = {};
        rules: any = {};

        handleSubmit() {
            this.formRef.validate(valid => {
                if (valid) {
                    this.onSubmit(this.formData);
                }
            })
        }
    }
</script>

<style scoped>

</style>