import {Component, Vue} from "vue-property-decorator";
import {IUserDetail} from "@/components/login/user";
import {Getter, Mutation} from "vuex-class";
import StoreUserConstant from "@/store/user.costant";

@Component
export default class UserMixin extends Vue {
    @Getter(`${StoreUserConstant.moduleName}/${StoreUserConstant.getter().GetUserDetail}`)
    readonly userDetail!: IUserDetail;
    @Mutation(`${StoreUserConstant.moduleName}/${StoreUserConstant.mutation().SetUserDetail}`)
    public setUserDetail!: (userDetail: IUserDetail) => void;
}