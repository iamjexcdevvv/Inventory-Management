import { Component, OnInit } from "@angular/core";
import { SideNavigationComponent } from "../../shared/components/side-navigation/side-navigation";

@Component({
    selector: "dashboard",
    templateUrl: "dashboard.component.html",
    imports: [SideNavigationComponent],
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
