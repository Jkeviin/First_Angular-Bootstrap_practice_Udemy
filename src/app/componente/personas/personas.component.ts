import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  deshabilitar: boolean = false;
  mensaje: string = "No se han agregado personas";
  titulo: string = "Ingeniero";

  //Metodo publico
  public agregarPersona () : void {
    this.mensaje = "Persona agregada";
  }

/*   public modificarTitulo (event: Event) : void {
    console.log('Encontrado al elemento: ' + (<HTMLInputElement>event.target).value)
    this.titulo = (<HTMLInputElement>event.target).value;
  } */

}
