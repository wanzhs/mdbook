<template>
    <Form :model="formData" :label-width="80" ref="formRef" :rules="rules">
        <FormItem prop="userAccount" label="用户名">
            <Input placeholder="请输入用户名" v-model="formData.userAccount">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="userPassword" label="密码">
            <Input type="password" placeholder="请输入密码" v-model="formData.userPassword">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
    </Form>
</template>

<script lang="ts">
    import {Component, Prop, Ref, Vue, Watch} from "vue-property-decorator";
    import {IUserDetail} from "@/components/login/user";
    import {Form} from "view-design";
    import {FormVerification} from "@/components/common/FormVerification";

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
        rules: any = {
            userAccount: FormVerification.defaultString(),
            userPassword: FormVerification.defaultPassword()
        };

        handleSubmit() {
            this.formRef.validate(valid => {
                if (valid) {
                    this.onSubmit(this.formData);
                }
            });
        }
    }
</script>

<style scoped>

</style>