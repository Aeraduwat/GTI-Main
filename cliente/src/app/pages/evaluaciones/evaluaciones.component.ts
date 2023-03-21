import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

//fx Evaluar
import { RegionService } from './../../services/region.service';
import { StackeholdersService } from './../../services/stackeholders.service';

import { Region } from './../../models/region';
import { Stackeholders } from './../../models/stackeholders';

import { Evaluacion } from './../../models/evaluacion';
import { EvaluacionService } from './../../services/evaluacion.service';


@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit{

  listarRegiones : Region[] = [];
  listarStakeholders : Stackeholders[] = [];
  listarEvaluaciones : Evaluacion[] = [];
  evaluaciones : number[] = [];
 
  constructor(
    private router : Router,
    private toastr: ToastrService,
    private _regionService: RegionService,
    private _stakeholderService: StackeholdersService,
    private _evaluacionesService: EvaluacionService){
  
    }

  ngOnInit(): void {
    this.obtenerRegiones();
    this.getValueRegion(0);
  }

  obtenerRegiones(){
    this._regionService.getRegiones().subscribe(data =>{
      this.listarRegiones = data;
    }, error=>{
      console.log(error);
      
    })
  }

  selectedRegion: any;
  placeholder?: string;
  nombreRegion?:string;

  getValueRegion(e: any){
   
     try {
      this.selectedRegion = e.target.value;
     } catch (error) {
       this.selectedRegion = 0;
     }

    this._stakeholderService.getStakeholdersByRegion(this.selectedRegion).subscribe( data =>{
      if (data.length === 0) {
        // mostrar mensaje de que no  hay SH asignados
        this.placeholder = "Sin stakeholders asignados al área"
        this.listarStakeholders = [];
        console.log("no hay SH asignados a la región");
      }else{
        // Cargar select de los SH
        this.placeholder = "Seleccione stakeholder"
        this.listarStakeholders = data;
      }
    }, error =>{
      console.log(error);
    })
  }

  id_stakeholder:any;
  cargo?:string;
  nombreSh?:string;

  getStakeholder(e:any){

    try{
        this.id_stakeholder = e.target.value;        
    }catch(error){        
        this.id_stakeholder = "0";
    }

    if(this.id_stakeholder !="0"){

      this._regionService.getRegion(this.selectedRegion).subscribe(data=>{
        this.nombreRegion = data.numero +" - " + data.nombre;
      });
      this._stakeholderService.getStakeholder(this.id_stakeholder).subscribe(data=>{

          this.cargo = data.cargo;
          this.nombreSh = data.nombre;
          console.log(this.cargo +" "+this.nombreSh);
      });

     this.getEvaluacion(this.id_stakeholder);

    }

  }
placeholderAdhesion?:string = "Adhesión";
placeholderInfluencia?:string = "Influencia";
// AGREGAR

adhesionValue : any;
influenciaValue:any;

getEvaluacion(id_sh:string){

  this.evaluaciones = [];

  this._evaluacionesService.getEvaluaciones(id_sh).subscribe(data =>{
   
    this.listarEvaluaciones = data;      
    if(this.listarEvaluaciones.length != 0){

      //Obtener última
      let ultimaEvaluacion = this.listarEvaluaciones[this.listarEvaluaciones.length -1];
      this.evaluaciones.push(ultimaEvaluacion!.adhesion);
      this.evaluaciones.push(ultimaEvaluacion!.influencia);
  
      //Obtener Pormedio
      let num = 0;
      let adhesion = 0;
      let influencia = 0;
      for (num; num < this.listarEvaluaciones.length ; num++) {
            adhesion += this.listarEvaluaciones[num].adhesion;
            influencia += this.listarEvaluaciones[num].influencia;
            console.log("a");
        };
        
      adhesion = Math.round(adhesion/num);
      influencia = Math.round(influencia/num);
  
      this.evaluaciones.push(adhesion);
      this.evaluaciones.push(influencia);
  
    }else{
      this.placeholderAdhesion = "No registra evaluaciones";
      this.placeholderInfluencia = "No registra evaluaciones";
  
    }
  });
}

agregarEvaluacion(){

  const Evaluacion: Evaluacion={
    id_sh : this.id_stakeholder,
    influencia : this.influenciaValue,
    adhesion : this.adhesionValue,
    fecha : new Date()
  }

  this._evaluacionesService.guardarEvaluacion(Evaluacion).subscribe(data =>{
    this.toastr.success('Nueva Evaluación registrada', 'Nuevo Registro');
    this.router.navigate(['/dashboard/evaluaciones']);
    this.getEvaluacion(this.id_stakeholder);
  });

  this.influenciaValue ='';
  this.adhesionValue = '';

}

setInfluencia(e:any){
  this.influenciaValue = e.target.value;
}

setAdhesion(e:any){
  this.adhesionValue = e.target.value;
}






}