import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-league-table-standings',
  templateUrl: './league-table-standings.component.html',
  styleUrls: ['./league-table-standings.component.css'],
})
export class LeagueTableStandingsComponent {
  @Input() serieTitle: string;
  @Input() equipos: any[]; // Replace 'any[]' with the type of your equipo objects if available
  @Input() equiposRocha: any[]; // Replace 'any[]' with the type of your equipo objects if available
  @Input() equiposInterior: any[]; // Replace 'any[]' with the type of your equipo objects if available
  @Input() categoria: any[]; // Replace 'any[]' with the type of your equipo objects if available
}
