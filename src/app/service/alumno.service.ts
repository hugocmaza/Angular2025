import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

 /* private alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      dni: '12345678',
      fechaNacimiento: new Date('2000-01-01'),
      email: 'juan@gmail.com'
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      dni: '87654321',
      fechaNacimiento: new Date('1999-05-15'),
      email: 'maria@gmail.com'
    }
  ];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  updateAlumno(alumno: Alumno) {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
    }
  }

  deleteAlumno(id: number) {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
  }*/
constructor(private readonly http: HttpClient) {}
    private readonly apiUrl = 'http://localhost:3000/alumnos';

getAll(): Observable<Alumno[]> {
  return this.http.get<Alumno[]>(this.apiUrl);
}

getById(id: number): Observable<Alumno> {
  return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
}

create(alumno: Alumno): Observable<Alumno> {
  return this.http.post<Alumno>(this.apiUrl, alumno);
}

update(alumno: Alumno): Observable<Alumno> {
  return this.http.put<Alumno>(`${this.apiUrl}/${alumno.id}`, alumno);
}

delete(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
