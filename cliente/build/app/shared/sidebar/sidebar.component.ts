import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  menuItems?:any[];

  constructor(private sideBarServices: SidebarService, private router:Router){
    this.menuItems = this.sideBarServices.menu;
  }


  logout(){
    this.router.navigateByUrl('/login');
  }

}
