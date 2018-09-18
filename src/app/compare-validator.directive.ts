import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[CompareValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: CompareValidatorDirective,
      multi: true
  }]
})

export class CompareValidatorDirective implements Validator {
  @Input() CompareValidator: string;
  validate(control: AbstractControl): {[key: string]: any} | any {
    const controlToCompare = control.parent.get(this.CompareValidator);
    if(controlToCompare && controlToCompare.value !== control.value) {
      return {'notEqual': true}
    }
    return null;
  }
}
