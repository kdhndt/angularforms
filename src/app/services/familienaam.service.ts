import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
const FAMILIENAMEN: string[] = [
  'tesla',
  'kelvin',
  'einstein',
  'edison'
];
@Injectable({
  providedIn: 'root'
})
export class FamilienaamService {
  bestaatNaamAl(naam: string): Observable<boolean> {
    return of(FAMILIENAMEN.includes(naam.toLowerCase()));
  }
}
