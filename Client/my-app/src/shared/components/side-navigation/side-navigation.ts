import { NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
    selector: "side-navigation",
    templateUrl: "side-navigation.component.html",
    imports: [RouterLink, LucideAngularModule, NgClass],
})
export class SideNavigationComponent implements OnInit {
    showSideNavigation = false;

    constructor() {}

    ngOnInit() {}

    toggleSideNav() {
        this.showSideNavigation = !this.showSideNavigation;
    }
}
