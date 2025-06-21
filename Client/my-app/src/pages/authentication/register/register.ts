import { Component, OnInit } from "@angular/core";
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";
import { userMustAgreeWithTermsAndCondition } from "../../../shared/custom-validators/user-must-agree.directive";
import { RouterLink } from "@angular/router";

@Component({
    selector: "register",
    templateUrl: "register.component.html",
    imports: [ReactiveFormsModule, RouterLink],
})
export class RegisterComponent implements OnInit {
    userRegistrationForm = new FormGroup({
        firstName: new FormControl("", [Validators.required]),
        lastName: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(8),
        ]),
        isTermsAndRegulationsAccepted: new FormControl(true, [
            userMustAgreeWithTermsAndCondition()
        ])
    });

    constructor() {}

    onSubmit() {
        console.log(this.userRegistrationForm.value);
    }

    ngOnInit() {}
}
