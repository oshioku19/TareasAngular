import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username: string = 'Angular'
password: string = '123456'
resultado = false;
mensaje = "";


Validar(user:string, pass:string) {
  if(user == this.username && pass==this.password){
    this.resultado = true;
    this.mensaje = "Las credenciales son correctas";
    } else {
      this.resultado = false;
      this.mensaje = "Credenciales incorrectas, inténtelo denuevo";
    }
  }
}



