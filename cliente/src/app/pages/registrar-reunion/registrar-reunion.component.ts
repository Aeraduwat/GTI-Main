import { Observable } from 'rxjs';
import { ReunionesService } from './../../services/reuniones.service';
import { Router } from '@angular/router';
import { Reuniones } from './../../models/reuniones';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-reunion',
  templateUrl: './registrar-reunion.component.html',
  styleUrls: ['./registrar-reunion.component.css']
})

export class RegistrarReunionComponent implements OnInit {
  reunionForm: FormGroup;
  listarReuniones : Reuniones[] = [];


  constructor(private fb: FormBuilder,
              private router : Router,
              private toastr: ToastrService,
              private _reunionService: ReunionesService){


    this.reunionForm = this.fb.group({
      idReuion: [''],
      nombreAutoridad: ['',Validators.required],
      cargo: ['',Validators.required],
      regionAutoridad: ['',Validators.required],
      fechaReunion: ['',Validators.required],
      unidadesParticipantes: ['',Validators.required],
      proyecto: ['',Validators.required],
      tema: ['',Validators.required],
      observaciones: [''],

    })
  }

  ngOnInit(): void {
      this.obtenerReunion();
  }

  agregarReunion(){

    const Reunion: Reuniones ={
      id_sh: this.reunionForm.get('nombreAutoridad')?.value,
      cargo: this.reunionForm.get('cargo')?.value,
      regionAutoridad: this.reunionForm.get('regionAutoridad')?.value,
      fecha: this.reunionForm.get('fechaReunion')?.value,
      unidadesParticipantes:this.reunionForm.get('unidadesParticipantes')?.value,
      proyecto: this.reunionForm.get('proyecto')?.value,
      tema: this.reunionForm.get('tema')?.value,
      observaciones: this.reunionForm.get('observaciones')?.value
  }
  console.log(Reunion);

  this.toastr.success('Nueva reunión registrada', 'Nuevo Registro');
  this.router.navigate(['/dashboard/registrar-reunion']);
}

obtenerReunion(){
  this._reunionService.getReuniones().subscribe(data =>{
    console.log(data);
    this.listarReuniones = data;
  }, error=>{
    console.log(error);
    
  })
}



}
