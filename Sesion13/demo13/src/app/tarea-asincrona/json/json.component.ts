import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {

  data: Array<any> = [
    {
      apellido: 'Arcila',
      Casado: false,
      Dirección: 'Calle 35 43',
      Nombre: 'Diego',
      Telefono: '3859720'
    },
    {
      apellido: 'Bueno',
      Casado: false,
      Dirección: 'CR 16A 53 28',
      Nombre: 'Kevin',
      Telefono: '31485579954'
    },
    {
      apellido: 'Palomino',
      Casado: false,
      Dirección: 'CR 16A 53 28',
      Nombre: 'Natalia',
      Telefono: '32255945555'
    },
  ]
}
