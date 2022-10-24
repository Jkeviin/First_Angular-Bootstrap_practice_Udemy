import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  // Atributos públicos
  nombre: string = 'Kevin';
  apellido: string = 'Ortega';
  edad: number = 19;
  //private edad: number = 19;

/*   // Funcion publica
  public getEdad(): number {
    return this.edad;
  } */
}
