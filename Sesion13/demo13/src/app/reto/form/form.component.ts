import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
 
})
export class FormComponent {

  constructor (private formBuilder:FormBuilder){}

    valor2=0;
    tipo="";

  registroForm = this.formBuilder.group({
    valor: ['',{validators: [Validators.required, Validators.pattern('[a-zA-ZñÑá-úÁ-Ú ]*'), Validators.minLength(1)]}],

  });

  get valor(){return this.registroForm.get('valor');}

}
