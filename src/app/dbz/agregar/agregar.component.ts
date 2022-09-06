import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonajeDBZ } from '../intefaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  
    
  @Input() nuevo : PersonajeDBZ ={
    nombre : '',
    poder : 0
  }

  @Output() onNuevoPersonaje: EventEmitter<PersonajeDBZ> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      console.log("No puedes agregar un personaje sin nombre")
      return;
    }
    if (this.nuevo.poder == null) {
      this.nuevo.poder =0
    }    
    this.onNuevoPersonaje.emit(this.nuevo)
    
    this.nuevo.nombre=''; 
    this.nuevo.poder=0;

  }


}
