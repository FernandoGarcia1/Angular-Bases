import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h2>La base es <span>{{base}}</span></h2>
    <button (click)="acumular(base)">+{{base}}</button>
    <h2>{{numero}}</h2>
    <button (click)="acumular(-1*base)">-{{base}}</button>
    `,
    
  })
export class ContadorComponent  {
    titulo: string = 'Contador-App';
    numero : number = 0;
    base : number = 5;
    
  
    sumar (){
      this.numero +=1;
    }
    restar (){
      this.numero -=1;
    }
    acumular (cantidad: number){
      this.numero +=cantidad;
    }
}