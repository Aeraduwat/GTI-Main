import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full' },
  
  { path:'dashboard', component:DashboardComponent},
  { path:'tablas', component:TablasComponent},
  /*
  { path:'perfil', component:PerfilComponent},
  { path:'registrar-reunion', component:RegistrarReunionComponent},
 */ 


  { path:'**', component:NopageFoundComponent }

];

@NgModule({
  imports: [CommonModule ,RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
