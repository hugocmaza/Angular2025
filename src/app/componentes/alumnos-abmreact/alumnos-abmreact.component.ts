import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../service/alumno.service';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-alumnos-abmreact',
  imports: [ReactiveFormsModule, CommonModule, DatePipe],
  templateUrl: './alumnos-abmreact.component.html',
  styleUrl: './alumnos-abmreact.component.css'
})
export class AlumnosABMReactComponent {
  private alumnoService = inject(AlumnoService);
  private fb = inject(FormBuilder);

  alumnos: Alumno[] = [];
  alumnoForm: FormGroup;

  constructor() {
    this.alumnoForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{7,8}$/)]],
      fechaNacimiento: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.loadAlumnos();
  }

  loadAlumnos() {
    this.alumnos = this.alumnoService.getAlumnos();
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const alumno: Alumno = this.alumnoForm.value;
      if (alumno.id) {
        this.alumnoService.updateAlumno(alumno);
      } else {
        const newAlumno = { ...alumno, id: this.generateId() };
        this.alumnoService.addAlumno(newAlumno);
      }
      this.loadAlumnos();
      this.resetForm();
    }
  }

  editAlumno(alumno: Alumno) {
    this.alumnoForm.patchValue({
      ...alumno,
      fechaNacimiento: this.formatDate(alumno.fechaNacimiento)
    });
  }

  deleteAlumno(id: number) {
    this.alumnoService.deleteAlumno(id);
    this.loadAlumnos();
  }

  resetForm() {
    this.alumnoForm.reset({
      id: 0,
      nombre: '',
      apellido: '',
      dni: '',
      fechaNacimiento: null,
      email: ''
    });
  }

  private generateId(): number {
    return this.alumnos.length > 0
      ? Math.max(...this.alumnos.map(a => a.id)) + 1
      : 1;
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }
}
