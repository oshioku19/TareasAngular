import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {

  // Creando un array
  datos = new Array;

  nombre= "";
  cajaTexto="";

  retorno=0;
  mensaje = "Falta rellenar el campo de texto"
  // Metodo para añdir valores
  Agregar(){
    if(this.nombre.trim()==""){
      return this.retorno =1;
    }
    this.datos.push({'nombre': this.nombre, 'cajaTexto': this.cajaTexto})
    console.log(this.datos)
    return this.retorno = -1;
  }



  eliminar(numero: number){
    this.datos.splice(numero, 1);
    console.log(numero);
  }
}
