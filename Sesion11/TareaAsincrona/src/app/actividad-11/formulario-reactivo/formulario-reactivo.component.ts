import { Component } from '@angular/core';
import { Registro } from 'src/app/modulo/registro';


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
model: Registro = {nombre:"", email:"", mensaje:""};
  
}
