import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent  {

  nombres: string="";
  dni: string = "";
  estadoc: string = "";
  datos: any;

  onSubmit() {
    this.datos = {Nombres: this.nombres, Dni: this.dni, EstadoCivil: this.estadoc};
  }
  
}
