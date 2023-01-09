import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {

  // Crear el Arra de datos -> Almacena informacion
  datos = new Array;
  // Los datos para el array
  nom = "";
  ape = "";

  // Metodo para Añadir valores al array
  Agregar(){
    if(this.nom!=''){
      this.datos.push({'Nombre': this.nom, 'Apellido': this.ape});
      this.nom = "";
      this.ape = "";
    }else{
      console.log("Debe ingresar nombre");
    }
  }

  Eliminar(indice:number){
    this.datos.splice(indice, 1);
  }

}
