import {MenuItem} from "primeng/primeng";

export interface SubmenuItem extends MenuItem {

    routerLink?: (string | number)[];

}
