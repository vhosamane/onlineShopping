import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[compare]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordCheckDirective, multi: true}]
})
export class PasswordCheckDirective implements Validator {
  @Input('compare') controlNameToCompare: string;
  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {
    const controlToCompare = c.parent.get(this.controlNameToCompare);
    if(controlToCompare) {
      const subscription: Subscription.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value ? {'compare': true}: null
  }
}
