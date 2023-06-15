import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit{
  public playerList:any = [];

  constructor (private RestService:RestService){ }

  ngOnInit(): void {
    this.cargarData()
  }

  public cargarData() {
    this.RestService.get('http://localhost:3000/players')
    .subscribe(res => 
      this.playerList = res
    )
  }
}

