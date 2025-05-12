import { Component, inject } from '@angular/core';
import { Alumno } from '../../model/alumno';
import {FormsModule, NgForm} from '@angular/forms';
import {DatePipe, NgFor} from '@angular/common';
import { AlumnoService } from '../../service/alumno.service';
@Component({
  selector: 'app-alumnos-abm',
  imports: [FormsModule, NgFor, DatePipe],
  templateUrl: './alumnos-abm.component.html',
  styleUrl: './alumnos-abm.component.css'
})
export class AlumnosABMComponent {
  /*alumnoPepito: Alumno = {
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
*/
private readonly alumnoService = inject(AlumnoService);
  alumnoPepito: Alumno = {
    id: 1,
    nombre: 'Pepito',
    apellido: 'Pérez',
    dni: '12345678',
    fechaNacimiento: new Date('2000-01-01'),
    email: 'pepito@gmail.com'
  };
  alumnos: Alumno[] = [];
  selectedAlumno: Alumno = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: new Date(),
    email: ''
  };

  constructor() {
    this.loadAlumnos();
  }

  loadAlumnos() {
    this.alumnos = this.alumnoService.getAlumnos();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.selectedAlumno.id) {
        this.alumnoService.updateAlumno(this.selectedAlumno);
      } else {
        const newAlumno = this.selectedAlumno;
        newAlumno.id = this.generateId() ;
        this.alumnoService.addAlumno(newAlumno);
      }
      this.loadAlumnos();
      this.resetForm(form);

    }
  }

  editAlumno(alumno: Alumno, form?: NgForm) {
    this.selectedAlumno = alumno;
    if (form) {
    form.form.markAsPristine();
    form.form.markAsUntouched();
    }
  }

  deleteAlumno(id: number) {
    this.alumnoService.deleteAlumno(id);
    this.loadAlumnos();
  }

  resetForm(form?: NgForm) {
    this.selectedAlumno = {
      id: 0,
      nombre: '',
      apellido: '',
      dni: '',
      fechaNacimiento: new Date(),
      email: ''
    };
    if (form) {
      form.resetForm(this.selectedAlumno);
      form.form.markAsPristine();
      form.form.markAsUntouched();
    }
  }

  private generateId(): number {
    return this.alumnos.length > 0
      ? Math.max(...this.alumnos.map(a => a.id)) + 1
      : 1;
  }


}
