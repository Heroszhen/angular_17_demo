import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator{
  @Input('appPasswordValidator') password: string = '';

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (['', null].includes(control.value)) return null;

    if (control.value.length < 8 || control.value.length > 12) {
      return {'format': true};
    }
    return null;
  }
}
