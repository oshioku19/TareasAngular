import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserseviceService {

  // Crear una instancia de HttpClient
  constructor(private http: HttpClient) { }

  // Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
  apiUser = environment.apiURL + 'registerUser?';



  // Metodo POSt para enviar datos a la API users

  postUser(usuario: Users): Observable<Users>{
    return this.http.post<Users>(this.apiUser, usuario);
  }
}
