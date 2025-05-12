import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { AlumnosABMComponent } from './componentes/alumnos-abm/alumnos-abm.component';
import { AlumnosABMReactComponent } from './componentes/alumnos-abmreact/alumnos-abmreact.component';

export const routes: Routes = [
  { path: '', component: AlumnosABMComponent },
  { path: 'alumnos', component: AlumnosABMComponent },
  { path: 'alumnos-react', component: AlumnosABMReactComponent }
];
