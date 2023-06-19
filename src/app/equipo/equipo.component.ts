import { Component, OnInit } from '@angular/core';
import { playersList } from './playersList';

@Component({
  selector: 'app-equipo',
  templateUrl: './index.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit{
  playerList = playersList
  ngOnInit(): void { 
  }
}

