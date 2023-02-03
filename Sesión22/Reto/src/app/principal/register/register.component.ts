import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
   firstname:string=""
   lastname:string=""
   username:string=""
   password:string=""
   enviado=false;
  
   constructor() { }
   EnviarMensaje(){
     this.enviado = true;
   }
  SalirDeRuta():Observable<boolean> | boolean{
    // criterios para evitar que el usuario abandone el componente
    if ((this.firstname != "" || this.lastname != ""|| this.username != ""|| this.password != "") &&  !this.enviado) {
      const confirmar = confirm("¿Desea salir del formulario? \n Perdera todos los datos!!");
      return confirmar;
  }
  return true;
   }
}
