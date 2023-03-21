import { Region } from './../models/region';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url='http://localhost:4000/api/regiones';
  //enlace

  constructor(private http: HttpClient) { }

  getRegiones(): Observable<any>{

    return this.http.get(this.url);
  }

  getRegion(id:string): Observable<any>{

    return this.http.get(this.url +"/"+ id);
  }
}
