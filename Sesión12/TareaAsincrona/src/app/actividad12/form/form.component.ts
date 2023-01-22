import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
constructor (private formBuilder: FormBuilder){}

 //Estructura del formulario reactivo
 registroForm = this.formBuilder.group({
  nombre: ['', Validators.required],
  email: ['', Validators.required],
  telefono: ['', Validators.required],
  asunto: ['', Validators.required],
  mensaje: ['', Validators.required],
  
});

// Generar un metodo get para cada campo del formulario reactivo
get nombre(){return this.registroForm.get('nombre');}
get email(){return this.registroForm.get('email');}
get telefono(){return this.registroForm.get('telefono');}
get asunto(){return this.registroForm.get('asunto');}
get mensaje(){return this.registroForm.get('mensaje');}

// Generar el método onSubmit para registrar los datos del formulario en un Array
datos = new Array;
aviso: boolean = false;

onSubmit(){
  if(!this.registroForm.valid){
    alert('Alguna validación no se ha cumplido');
    return;
  }
  this.datos.push({
    'Nombre' : this.registroForm.get('nombre')?.value,
    'Email' : this.registroForm.get('email')?.value,
    'Telefono' : this.registroForm.get('telefono')?.value,
    'Asunto' : this.registroForm.get('asunto')?.value,
    'Mensaje' : this.registroForm.get('mensaje')?.value,
  });
  console.log(this.datos);
  this.aviso=true;
}
}
