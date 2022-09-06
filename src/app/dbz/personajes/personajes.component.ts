import { Component, Input, OnInit } from '@angular/core';
import { PersonajeDBZ } from '../intefaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  @ Input() personajes:PersonajeDBZ[] = []; //obtiene informacion desde el component padre (main-page)
  constructor() { }

  ngOnInit(): void {
  }

}
