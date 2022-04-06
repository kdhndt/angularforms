import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[verbodenNaam]',
    providers: [{
        provide: NG_VALIDATORS, useExisting: VerbodenNaamValidatorDirective,
        multi: true
    }]
})
export class VerbodenNaamValidatorDirective implements Validator {
    // de verbodenNaam variabele wordt gevuld met de waarde meegegeven in de HTML verbodenNaam selector (bv. asdf)
    @Input('verbodenNaam') verbodenNaam!: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        // case insensitive
        const naamRegEx = new RegExp(this.verbodenNaam, 'i');
        // vergelijk de waarde van de input met de verbodenNaam variabele
        const verboden = naamRegEx.test(control.value);
        return verboden ? { verbodenNaam: { value: control.value } } : null;
    }
}
