import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
tarea = "";
descripcion= "";
tareas= new Array;

Agregar() {
  if(this.tarea!=""){
  this.tareas.push({ Nombre: this.tarea, Descripcion: this.descripcion });
  this.tarea = '';
  this.descripcion = '';}
}

}
