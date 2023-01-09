import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
name = 'Juan Perez';
edad = 18;
sueldo = ["Home","Contacto", "Servicios"];
usuario = "jperez";
resultado = false;
mensaje ="";

Validar (user:string) {
  if(user == this.usuario){
  this.resultado = true;
  this.mensaje = "Usuario correcto";
  } else {
    this.resultado = false;
    this.mensaje = "Usuario incorrecto";
  }
}

}
