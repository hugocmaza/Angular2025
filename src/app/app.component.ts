import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './componentes/comunes/footer/footer.component';
import { HeaderComponent } from './componentes/comunes/header/header.component';
import { AlumnosABMComponent } from "./componentes/alumnos-abm/alumnos-abm.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, AlumnosABMComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular20240421';
}
