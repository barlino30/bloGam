import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Persona {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];
  nuevaPersona: Persona = {
    id: 0,
    nombre: '',
    edad: 0
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.http.get<Persona[]>('http://localhost:4200/personas')
      .subscribe(data => {
        this.personas = data;
      });
  }

  agregarPersona() {
    this.http.post('http://localhost:4200/personas', this.nuevaPersona)
      .subscribe(() => {
        this.obtenerPersonas();
        this.nuevaPersona = {
          id: 0,
          nombre: '',
          edad: 0
        };
      });
  }

  editarPersona(persona: Persona) {
    // Implementa la lógica para editar una persona
  }

  eliminarPersona(id: number) {
    // Implementa la lógica para eliminar una persona
  }
}

