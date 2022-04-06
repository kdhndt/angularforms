import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';
export function wachtwoordenKomenNietOvereen(): ValidatorFn {

    // VALIDATOR WORDT OP EEN GROUP (MEERDERE CONTROLS) TOEGEPAST
    // neemt een Angular control object als argument (= FormGroup en/of met zijn FormControl?)
    return (control: AbstractControl): ValidationErrors | null => {
        const wachtwoord = control.get('wachtwoord')?.value;
        const herhaalWachtwoord = control.get('herhaalWachtwoord')?.value;
        return wachtwoord !== herhaalWachtwoord ? { misMatch: true } : null;
    };

/*     return (frm: FormGroup): ValidationErrors | null => {
        const wachtwoord = frm.get('wachtwoord');
        const herhaalWachtwoord = frm.get('herhaalWachtwoord');
        return wachtwoord && herhaalWachtwoord && wachtwoord.value !==
            herhaalWachtwoord.value ? { misMatch: true } : null;
    }; */
}