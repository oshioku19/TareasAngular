import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  contra = '';
  mostrar = false

  errorMensaje = '';
  usuarioError = '';
  contraError = '';

  validar = {
    usuario: 'Lyang',
    contra: '123456',
  };

  constructor(private autenticacion: AutenticacionService, private router: Router) { }

  urlRedireccion = "";

login() {
  if (this.usuario === this.validar.usuario && this.contra === this.validar.contra) {
    this.autenticacion.login();
    this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.router.navigate([this.urlRedireccion]);
    this.mostrar = false
    return
  } else {
    this.mostrar = true
    this.errorMensaje = 'Ingrese los datos correctamente🚨';
    if (this.usuario === '') {
      this.usuarioError = 'El espacio usuario es requerido';
    }
    if (this.contra === '') {
      this.contraError = 'La contraseña es requerida';
    }
  }
}
}

