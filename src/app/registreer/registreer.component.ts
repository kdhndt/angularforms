import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BestaatNaamAl } from '../custom-validators/bestaat-naam-al';
import { voornaamMagGeen4TekensLangZijn } from '../custom-validators/voornaam-mag-geen-4-tekens-lang-zijn';
import { wachtwoordenKomenNietOvereen } from '../custom-validators/wachtwoorden-komen-niet-overeen';

/* REACTIVE */

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.css']
})
export class RegistreerComponent implements OnInit {
  // FormGroup heeft FormControls
  // validatie gebeurt aan de model kant, bij enige wijziging in input wordt er gevalideerd
  registreerFormulier = new FormGroup({
    // plaats validators in het tweede argument, gebruik een array als er meerdere zijn
    voornaam: new FormControl('', [Validators.required, Validators.minLength(3), voornaamMagGeen4TekensLangZijn()]), // sync validatie
    familienaam: new FormControl('', { asyncValidators: [this.bestaatNaamAlValidator.validate()], updateOn: 'blur' } ), // async validatie (gebeurt enkel als de sync validatie ok is)
    wachtwoordMatch: new FormGroup({
      wachtwoord: new FormControl('', Validators.required),
      herhaalWachtwoord: new FormControl('', Validators.required)
    }, { validators: wachtwoordenKomenNietOvereen() } ), // cross-field validatie
    adres: new FormGroup({
      straat: new FormControl(''),
      postcode: new FormControl(''),
      gemeente: new FormControl('')
    })
  });

  // gemakkelijkere manier om te verwijzen naar velden in html (bv. bij foutboodschappen etc.)
  get voornaam() {
    return this.registreerFormulier.get('voornaam')!;
  }
  get familienaam() {
    return this.registreerFormulier.get('familienaam')!;
  }
  get wachtwoordMatch() {
    return this.registreerFormulier.get('wachtwoordMatch')!;
  }
  get wachtwoord() {
    return this.wachtwoordMatch.get('wachtwoord')!;
  }
  get herhaalWachtwoord() {
    return this.wachtwoordMatch.get('herhaalWachtwoord')!;
  }

  // validator class injecteren via constructor om er toegang tot te krijgen
  constructor(private bestaatNaamAlValidator: BestaatNaamAl) { }

  ngOnInit(): void {
  }

  // value kan gecheckt worden
  doeIetsOnSubmit() {
    console.log(this.registreerFormulier.value);
  }

}
