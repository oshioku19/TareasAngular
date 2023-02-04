import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { UserseviceService } from 'src/app/services/usersevice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Crear atributo de tipo FormBuilder, iniciando servicio
constructor(private formBuilder : FormBuilder, private servicio : UserseviceService){ } 

// Estructura del Formulario reactivo
registroForm = this.formBuilder.group({

  email: ['', Validators.required],
  password: ['',Validators.required],

});

// Metodo GET
get email(){return this.registroForm.get('email')};
get password(){return this.registroForm.get('password')};

// Creando el objeto que se enviara

user:any;
mostrar:boolean= false;
datos : Users = { email: '', password: ''
  
};

  // Metodo post
  onSubmit(){

    this.datos = {
      email: this.email?.value || '',
      password: this.password?.value || ''
    };

    this.mostrar = !this.mostrar;
    this.servicio.postUser(this.datos).subscribe(
      
      (usuario: Users)=>{console.log(usuario),
      this.user = usuario;}
    )

  }
}
