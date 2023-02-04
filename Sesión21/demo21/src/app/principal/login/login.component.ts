import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autenticacion: AutenticacionService, private router: Router , private formBuilder : FormBuilder){}
    
  redireccion = 'post';

  login(){
    this.autenticacion.login();
    this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = 'post';
    this.router.navigate([this.redireccion]);
  }

  datos_padre: any;
  botonDeshabilitado = false;
  mostrar : boolean = false;

  registroForm = this.formBuilder.group({
  username: ['',Validators.required],
  password: ['', Validators.required],
});

  // Generar un metodo get para cada campo del formulario reactivo
  get username(){ return this.registroForm.get('username');}
  get password(){ return this.registroForm.get('password');}

    // genera que el registroForm se vuelva un array 

    // this.datos_padre = Object.values(this.registroForm.getRawValue()); 

    Enviar(){
      this.datos_padre = (this.registroForm.value); 
    }

    Activar(){
      if(this.registroForm.valid){
        this.botonDeshabilitado = true;
      } else {
        this.botonDeshabilitado = false;
      }
    }

    ngOnInit(){
      this.registroForm.statusChanges.subscribe(status => {
        this.botonDeshabilitado = status === 'VALID';
      });
    }
}
