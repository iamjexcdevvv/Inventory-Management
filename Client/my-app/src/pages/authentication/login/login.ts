import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
    selector: "login-page",
    templateUrl: "login.component.html",
    imports: [RouterLink, ReactiveFormsModule]
})
export class LoginPageComponent implements OnInit {
    userLoginForm = new FormGroup({
        email: new FormControl("", [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl("", [
            Validators.required
        ])
    })

    constructor() {}

    ngOnInit() {}
}
