import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistreerComponent } from './registreer/registreer.component';
import { NaamFormulierTemplateDrivenComponent } from './naam-formulier-template-driven/naam-formulier-template-driven.component';
import { VerbodenNaamValidatorDirective } from './directives/verboden-naam-validator-directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistreerComponent,
    NaamFormulierTemplateDrivenComponent,
    VerbodenNaamValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // reactive
    ReactiveFormsModule,
    // template driven met [(ngModel)]
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
