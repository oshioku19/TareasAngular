import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
mensaje="Framework Angular - Desarrollo de Aplicaciones";
mostrar=true;
valor="Ocultar";

Generar(){
  if(this.mostrar){
    this.valor = "Mostrar"
    this.mostrar = false;
   }
   else{
    this.valor = "Ocultar"
    this.mostrar = true;
   }
  }
//Variables para ngModel - Importar al módulo gestor NgModule, FormsModule
nombre = "";
apellido = "";

valor1=0;
valor2=0;
resultado=0;

  Sumar(){
    this.resultado=this.valor1+this.valor2;
  }

  color(){
    return 'blue';
  }

  //Variables para ngSwitch

  num1 =0;
  num2 =0;
  operacion = "ninguna";
}
