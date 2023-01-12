import { Component } from '@angular/core';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent {
  mostrar=true;
  valor = "Ocultar";
  mensaje = "Activa el checkbox para mostrar el contenido";

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
