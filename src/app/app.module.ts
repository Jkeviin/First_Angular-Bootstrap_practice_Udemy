import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './componente/persona/persona.component';
import { PersonasComponent } from './componente/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Esto es para poder usar ngModel. NgModel es una directiva de Angular que permite enlazar datos de un formulario con las propiedades de un componente.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
