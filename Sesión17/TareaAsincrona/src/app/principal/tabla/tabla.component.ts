import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  producto:any;
  productos = [
    { id: 1, codigo: 'P001', descripcion: 'Alfajores de casa', precioCompra: 20.00, precioVenta: 30.00, ganancia: 24, existencia: 120 },
    { id: 2, codigo: 'P002', descripcion: 'Atun', precioCompra: 40.00, precioVenta: 55.00, ganancia: 23, existencia: 231 },
    { id: 3, codigo: 'P003', descripcion: 'Fideos', precioCompra: 23.00, precioVenta: 34.00, ganancia: 22, existencia: 123 },
    { id: 4, codigo: 'P004', descripcion: 'Ajinomen', precioCompra: 12.00, precioVenta: 18.00, ganancia: 45, existencia: 134 },
    { id: 5, codigo: 'P005', descripcion: 'Chocolate', precioCompra: 12.00, precioVenta: 19.00, ganancia: 34, existencia: 344 }
  ];

  constructor(private router: Router) { }
  
editarProducto(id: number) {
  this.producto = this.productos.find(p => p.id == id);
  this.router.navigate(['/productos',JSON.stringify(this.producto)]);
}

  ngOnInit(): void {
  }

}
