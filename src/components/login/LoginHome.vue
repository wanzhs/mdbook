<template>
    <div align="center">
        <!--        <ModalV1 title="用户登录" v-model="visible" #default="slotProps">-->
        <!--        <ModalV1 title="用户登录" v-model="visible" v-slot:default="slotProps">-->
        <ModalV1 title="用户登录" v-model="visible" :show-always="true">
            <!--            <template v-slot:default>-->
            <template #default>  <!--template可以删除-->
                <LoginForm :data-source="formData" :on-submit="handleSubmit" ref="formRef"/>
                <SubmitOne :handle-submit-click="handleSubmitClick"/>
            </template>
        </ModalV1>
    </div>
</template>

<script lang="ts">
    import {Component, Mixins, Ref} from "vue-property-decorator";
    import UserMixin from "@/components/login/UserMixin";
    import LoginForm from "@/components/login/LoginForm.vue";
    import {IForm, IUserDetail} from "@/components/login/user";
    import ModalV1 from "@/components/common/ModalV1.vue";
    import SubmitOne from "@/components/common/SubmitOne.vue";
    import UserService from "@/components/login/user.service";
    import {homeName} from "@/config/config.constant";

    @Component({
        components: {SubmitOne, ModalV1, LoginForm}
    })
    export default class LoginHome extends Mixins(UserMixin) {
        public formData: IUserDetail = {};
        public visible: boolean = true;
        @Ref("formRef")
        public formRef!: IForm<IUserDetail>;

        public handleSubmitClick() {
            this.formRef.handleSubmit();
        }

        public handleSubmit(query: IUserDetail) {
            UserService.userLogin(query).then(value => {
                if (value.code === 0) {
                    this.setUserDetail(value.data);
                    this.$router.push({name: homeName});
                }
            });
        }
    }
</script>

<style scoped>

</style>