import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  // Definir la URL de la API
  urlBase = environment.apiURL

  // Crear una instancia de HttpClient
  constructor(private http: HttpClient) { }

  // Metodo para consumr la Api users
  getAll(): Observable<string>{
    const url = this.urlBase;
    return this.http.get<string>(url);
  }
}
