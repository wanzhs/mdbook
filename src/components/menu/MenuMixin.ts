import {Component, Vue} from "vue-property-decorator";
import {IMenuInfo} from "./menu";

@Component
export default class MenuMixin extends Vue {
    public showTitle(item: IMenuInfo) {
        return item.title ? item.title : '';
    }

    public showChildren(item: IMenuInfo) {
        return item.children && item.children.length > 0;
    }

    public getName(item: IMenuInfo) {
        return item.name;
    }
}