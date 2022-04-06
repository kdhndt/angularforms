import { Component, OnInit } from '@angular/core';
import { Persoon } from '../persoon';

@Component({
  selector: 'app-naam-formulier-template-driven',
  templateUrl: './naam-formulier-template-driven.component.html',
  styleUrls: ['./naam-formulier-template-driven.component.css']
})
export class NaamFormulierTemplateDrivenComponent implements OnInit {
  wagens = ['Volkswagen', 'Peugeot', 'Audi'];
  persoon = new Persoon(55, 'Smits', this.wagens[0], 'Jean');

  constructor() { }

  ngOnInit(): void {
  }

}
