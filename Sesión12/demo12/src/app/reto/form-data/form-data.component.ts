import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  // Crear atributo de tipo FormBuilder
  constructor (private formBuilder : FormBuilder){ }

  //Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
    dni: ['', {validators:[Validators.required, Validators.pattern('[0-9]{8}')]}
  ],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    ciudad: ['', Validators.required],    
  });

  // Generar un metodo get para cada campo del formulario reactivo
  get dni(){return this.registroForm.get('dni');}
  get nombres(){return this.registroForm.get('nombres');}
  get apellidos(){return this.registroForm.get('apellidos');}
  get ciudad(){return this.registroForm.get('ciudad');}

  // Generar el método onSubmit para registrar los datos del formulario en un Array
  datos = new Array;
  mensaje: boolean = false;

  onSubmit(){
    if(!this.registroForm.valid){
      alert('Alguna validación no se ha cumplido');
      return;
    }
    this.datos.push({
      'Dni' : this.registroForm.get('dni')?.value,
      'Nombres' : this.registroForm.get('nombres')?.value,
      'Apellidos' : this.registroForm.get('apellidos')?.value,
      'Ciudad' : this.registroForm.get('ciudad')?.value,  
    });
    this.mensaje=true;
  }
}
