import { Component, OnInit } from '@angular/core';
import { ServicioContratacionService } from '../servicio-contratacion.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioContratacion:ServicioContratacionService){}
  public myTeam:Array<any> = [];

  ngOnInit(): void{
    this.servicioContratacion.disparadorContratacion.subscribe(data => {
      this.myTeam.push(data);
    })
  }
}
