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
}
