import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReunionesService {
  url='http://localhost:4000/api/reuniones/'


  constructor(private http: HttpClient) { }

  getReuniones(): Observable<any>{

    return this.http.get(this.url);
    
  }

  eliminarReunion(id: string): Observable<any>{ 
    return this.http.delete(this.url + id)
  }

}
