import { Component,Input} from '@angular/core';


@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {

  @Input () tareas: any = [];

}
