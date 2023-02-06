import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  menu:any[]=[{
    titulo : 'Dashboard',
    icono : '',
    submenu:[
      {titulo:'Usuarios',url:'usuarios',icono:'fa fa-users'},
      {titulo:'Tablas',url:'tablas',icono:'fa fa-calendar'}
    ]
  },
{
  titulo:'Tablas',
  icono:'',
  submenu:[
    {titulo:'Usuarios',url:'usuarios',icono:'fa fa-users'},
    {titulo:'Usuarios',url:'usuarios',icono:'fa fa-users'}

  ]
}]

}
