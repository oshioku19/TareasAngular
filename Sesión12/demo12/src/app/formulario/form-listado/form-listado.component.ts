import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent {

  //Atributo que reciba datos de otro componente
  @Input() dato=new Array;

}
