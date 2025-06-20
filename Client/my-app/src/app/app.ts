import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "../styles.css",
    imports: [RouterOutlet],
})
export class App {}
