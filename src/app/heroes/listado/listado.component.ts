import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Batman', 'Cap America', 'Iron man', 'Hulk'];
  borrado : string = '';

  borrarHeroe(){
    console.log('borrando...  ')
    this.borrado = this.heroes.shift() || ''

  }
  

}
