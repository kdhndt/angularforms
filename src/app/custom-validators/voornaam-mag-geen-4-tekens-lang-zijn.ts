import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
// return een functie die ValidatorFn implementeert?
export function voornaamMagGeen4TekensLangZijn(): ValidatorFn {
    // control object als argument
    return (control: AbstractControl): ValidationErrors | null => {
        // indien valid wordt null weergegeven
        return control.value.length === 4 ? { is4Lang: true } : null;
    };
}
