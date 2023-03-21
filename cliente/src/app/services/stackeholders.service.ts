import { Stackeholders } from './../models/stackeholders';
import { Reuniones } from './../models/reuniones';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackeholdersService {

  url='http://localhost:4000/api/stakeholders';
  //enlace

  constructor(private http: HttpClient) { }

  getStakeholders(): Observable<any>{

    return this.http.get(this.url);
  }

  eliminarStakeholder(id: string): Observable<any>{ 
    return this.http.delete(this.url + id)
  }

  guardarStakeholder(stakeholder : Stackeholders): Observable<any> {
    return this.http.post(this.url, stakeholder);
  }

  getStakeholdersByRegion(id_region: string): Observable<any> {
    return this.http.get(this.url +"/region/"+ id_region);
  }

  getStakeholder(id:string): Observable<any>{

    return this.http.get(this.url+"/"+id);
  }

}
