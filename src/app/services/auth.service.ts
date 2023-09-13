import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email:string, password: string): Observable<any> {

    let body = {
      email,
      password
    }

    // Devolvemos la respuesta del Observable cuando la peticion HTTP termine
    return this.http.post('http://reqres.in/api/login', body)
  }
}
