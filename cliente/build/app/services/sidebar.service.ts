import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo : 'Dashboard',
    icono : '',
    submenu:[
      {titulo:'Usuarios',url:'usuarios',icono:'fa fa-users'},
      {titulo:'Tablas',url:'tablas',icono:'fa fa-calendar'}
    ]
}]

}
