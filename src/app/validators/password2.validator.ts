import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function Password2Validator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
        if (['', null].includes(form.value)) return null;

        const hasUpperCase = /[A-Z]/.test(form.value);
        const hasLowerCase = /[a-z]/.test(form.value);
        const hasNumber = /[0-9]/.test(form.value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(form.value);

        if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar))return {'format': true};

        return null;
    };
}