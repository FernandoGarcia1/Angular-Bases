import { Component, OnInit } from '@angular/core';
import { PersonajeDBZ } from '../intefaces/dbz.interfaces';
import { DBZService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {

  personajes: PersonajeDBZ [] =[
    {
      nombre:'Goku',
      poder : 12000
    },
    {
      nombre: 'Vegeta',
      poder : 10000
    },
    {
      nombre: 'Yamcha',
      poder : 500
    }
  ]

  personajeDefecto: PersonajeDBZ = {
    nombre: 'Maestro Roshi',
    poder :1000
  }
  

  constructor(private serviceDBZ : DBZService) { }

  ngOnInit(): void {
  }

  agregarNuevoPersonaje( nuevoPersonaje: PersonajeDBZ){
    this.personajes.push({
      nombre: nuevoPersonaje.nombre,
      poder : nuevoPersonaje.poder
    });
  }

  
}
