import { Reuniones } from './../models/reuniones';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReunionesService {

  url='http://18.231.175.65/api/reuniones';
  //enlace

  constructor(private http: HttpClient) { }

  getReuniones(): Observable<any>{

    return this.http.get(this.url);
    
  }

  eliminarReunion(id: string): Observable<any>{ 
    return this.http.delete(this.url + id)
  }

  guardarReunion(reuniones : Reuniones): Observable<any> {
    return this.http.post(this.url, reuniones);
  }

}
