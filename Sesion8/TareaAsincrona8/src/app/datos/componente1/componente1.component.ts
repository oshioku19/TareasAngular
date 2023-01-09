import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
// Crear el Arra de datos -> Almacena informacion
datos = new Array;
// Los datos para el array
nom = "";
ape = "";
edad = "";

// Metodo para Añadir valores al array
Agregar(){
this.datos.push({'Nombre': this.nom, 'Apellido': this.ape, 'Edad': this.edad});
}

}
