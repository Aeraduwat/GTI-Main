import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluacion } from '../models/evaluacion';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  url='http://localhost:4000/api/evaluaciones';
  //enlace

  constructor(private http: HttpClient) { }

  getEvaluaciones(id_sh:string): Observable<any>{
    // let a = this.http.get(this.url+"/sh/"+id_sh)
    // console.log(a.subscribe(data =>{
    //   console.log(data);
      
    // }));
    
     return this.http.get(this.url+"/sh/"+id_sh);
  }

  guardarEvaluacion(evaluacion : Evaluacion): Observable<any> {
    return this.http.post(this.url, evaluacion);
  }

}
