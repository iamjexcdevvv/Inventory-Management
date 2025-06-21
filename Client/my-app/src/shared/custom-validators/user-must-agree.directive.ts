import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function userMustAgreeWithTermsAndCondition(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value ? null : { userAgreeWithTermsAndCondition: false }
    }
}