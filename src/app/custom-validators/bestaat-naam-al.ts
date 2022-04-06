import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { FamilienaamService } from '../services/familienaam.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

// gebruik class omdat we een service moeten injecteren via constructor
export class BestaatNaamAl {
    constructor(private familienaamService: FamilienaamService) { }
    
    // AsyncValidatorFn ipv ValidatorFn, returnt een Promise of Observable
    validate(): AsyncValidatorFn {
        // tab na invoer op front-end om te controleren
        return (ctrl: AbstractControl): Observable< { [key: string]: any } | null> => {
            // The observable returned must be finite, meaning it must complete at some point.
            // To convert an infinite observable into a finite one, pipe the observable through a filtering operator such as first, last, take, or takeUntil.
            return this.familienaamService.bestaatNaamAl(ctrl.value.trim()).pipe(
                map(bestaalAl => {
                    if (bestaalAl) {
                        return { bestaatAl: true };
                        // er moet null gereturned worden indien correct...
                    } else { return null }
                }
                ));
        };
    }

/*     validate(): AsyncValidatorFn {
        return (ctrl: AbstractControl): Observable<{ [key: string]: any } | null> => {
            return this.familienaamService.bestaatNaamAl(ctrl.value.trim()).pipe(
                map(bestaalAl => {
                    if (bestaalAl) {
                        return { bestaatAl: true };
                    }
                }
                ));
        };
    } */
    
}