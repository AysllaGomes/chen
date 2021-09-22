import {AfterViewInit, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {ScrollPanel} from "primeng/primeng";
import {ProfileMode} from "../shared/enum/profile-mode.enum";
import {SubmenuItem} from "../submenu/model/submenu-item";

export interface Page extends AfterViewInit, OnDestroy, OnInit {

    profileSubmenuItemList: SubmenuItem[];

    submenuItemList: SubmenuItem[];

    showBreadcrumb: boolean;

    layourContainerViewChild: ElementRef;

    layoutMenuScrollerViewChild: ScrollPanel;

    layoutCompact: boolean;

    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean

    staticMenuMobileActive: boolean;

    darkMenu: boolean;

    profileMode: ProfileMode;

    resetMenu: boolean;

    ngOnInit(): void;

    ngAfterViewInit(): void;

    ngOnDestroy(): void;

    onLayoutClick(): void;

    onMenuClick(event): void;

    isOverlay(): boolean;

    isHorizontal(): boolean;

    isSlim(): boolean;

}
