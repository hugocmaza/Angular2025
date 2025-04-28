import { Component } from '@angular/core';
import { Alumno } from '../../model/alumno';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
@Component({
  selector: 'app-alumnos-abm',
  imports: [FormsModule, NgFor],
  templateUrl: './alumnos-abm.component.html',
  styleUrl: './alumnos-abm.component.css'
})
export class AlumnosABMComponent {
  alumnoPepito: Alumno = {
    id: 0,
    nombre: 'Pepito',
    apellido: 'Pérez',
    dni: '12345678',
    fechaNacimiento: new Date('2000-01-01'),
    email: 'pepito@gmil.com',
  };
   alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', dni: '12345678',
      fechaNacimiento: new Date('2000-01-01'), email: 'juan@gmail.com',
      },
    { id: 2, nombre: 'María', apellido: 'Gómez', dni: '87654321',
      fechaNacimiento: new Date('1999-05-15'), email: 'maria@gmail.com',
      },

    ];


      agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
      }

      eliminarAlumno(id: number) {
        this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
      }
      editarAlumno(alumno: Alumno) {
        const index = this.alumnos.findIndex(a => a.id === alumno.id);
        if (index !== -1) {
          this.alumnos[index] = alumno;
        }
      }

      obtenerAlumnos(): Alumno[] {
        return this.alumnos;
      }



}
