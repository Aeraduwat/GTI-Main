import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TablasComponent } from './tablas/tablas.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegistrarReunionComponent } from './registrar-reunion/registrar-reunion.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    TablasComponent,
    PagesComponent,
    RegistrarReunionComponent,
    EvaluacionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    TablasComponent,
    EvaluacionesComponent
  ]
})
export class PagesModule { }
