import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
  estudiantes: any[] = [];
  nombre: string = "";
  apellidos: string = "";
  carrera: string = "";

  insertarDatos() {
    let estudiante = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      carrera: this.carrera
    };

    this.estudiantes.push(estudiante);

    this.nombre = "";
    this.apellidos = "";
    this.carrera = "";
  }

  eliminarEstudiante(index: number) {
    if (confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
      this.estudiantes.splice(index, 1);
  
      let alertSection = document.createElement("section");
      alertSection.innerHTML = "Estudiante eliminado exitosamente";
      alertSection.style.backgroundColor = "lightgreen";
      alertSection.style.padding = "10px";
      alertSection.style.margin = "10px";
      let alertContainer = document.querySelector("#alert-container");
      if(alertContainer){
        alertContainer.appendChild(alertSection);
      }
      setTimeout(() => {
        alertSection.remove();
      }, 2000);
    }}
  
  constructor() { }

  ngOnInit(): void {
  }

}
