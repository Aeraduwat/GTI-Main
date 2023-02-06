import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablasComponent } from './tablas/tablas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarReunionComponent } from './registrar-reunion/registrar-reunion.component';

const routes:Routes=[
  { path:'dashboard',component:PagesComponent,
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'Bienvenido'}},
      {path:'tablas', component:TablasComponent, data:{titulo:'Tablas'}},
      {path:'usuarios', component:UsuariosComponent, data:{titulo:'Usuario'}},
      {path:'registrar-reunion', component:RegistrarReunionComponent, data:{titulo:'Nueva Reunion'}}

      
    ] 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
