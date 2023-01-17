import { Component } from '@angular/core';
import { Listado } from 'src/app/modelo/listado';
import { Registro } from 'src/app/modelo/registro';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  //model es un atributo basado en la interfaz de registro
model: Registro = {username:"", password:"", pais:Listado.Ninguno, ofertas:false};

  enviar(){
    console.log(this.model);
    alert ("se ha ha registrado correctamente")
  }

  cancelar(){
    this.model ={username:"", password:"", pais: Listado.Ninguno, ofertas:false};
  }

  //Atributo Array para listado
  paises:any[] =[]; //coleccion de objetos vacios

  ngOnInit(){ //método que detecta la carga o la creación del componente, aqui queremos ejecutar la carga de la lista de paises
    for( let item in Listado){
      if (isNaN(Number(item))) {
        this.paises.push({text:item, value: Listado[item]})
        
      }
    }
  }

}
