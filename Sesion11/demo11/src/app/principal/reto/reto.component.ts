import { Component } from '@angular/core';
import { Registro } from 'src/app/modelo/registro';
import { Reto } from 'src/app/modelo/reto';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent {
  model: Reto = {username:""};


}
