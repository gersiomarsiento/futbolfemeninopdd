import { Component } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent {


  currentMatchday = 3;
  totalMatchdays = 3;

  matches = [
    [
      // Matchday 1
      // TORNEO PREPARACIÓN
      { equipoLocal: 'La Paloma', golesLocal: '1', golesVisitante: '5', equipoVisitante: 'P. Congreso' },
      { equipoLocal: 'La Estación', golesLocal: '7', golesVisitante: '8', equipoVisitante: 'Electras' },
      { equipoLocal: 'Las Piedras', golesLocal: '3', golesVisitante: '14', equipoVisitante: 'Bohemias' },
      { equipoLocal: 'La Abasto', golesLocal: '7', golesVisitante: '1', equipoVisitante: 'La Ola' },
    ],
    [
      // Matchday 2
      { equipoLocal: 'La Paloma', golesLocal: '11', golesVisitante: '4', equipoVisitante: 'Electras' },
      { equipoLocal: 'La Estación', golesLocal: '6', golesVisitante: '11', equipoVisitante: 'P. Congreso' },
      { equipoLocal: 'Las Piedras', golesLocal: '2', golesVisitante: '4', equipoVisitante: 'La Abasto' },
      { equipoLocal: 'La Ola', golesLocal: '2', golesVisitante: '13', equipoVisitante: 'Bohemias' },
    ],
    [
      // Matchday 3
      { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
      { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
      { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
      { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    ],
    // Matches for each matchday
    // APERTURA + CLAUSURA
    // [
    //   // Matchday 1
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    //   { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    // ],
    // [
    //   // Matchday 2
    //   { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    //   { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    // ],
    // [
    //   // Matchday 3
    //   { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
    //   { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    // ],
    // [
    //   // Matchday 4
    //   { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
    //   { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    //   { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    //   { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    // ],
    // [
    //   // Matchday 5
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    //   { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    // ],
    // [
    //   // Matchday 6
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
    //   { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    //   { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
     
    // ],
    // [
    //   // Matchday 7
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    //   { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    //   { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    // ],
    
  ];

  get pages() {
    return Array(this.totalMatchdays).fill(0).map((_, index) => index + 1);
  }

  navigateMatchday(matchday: number | string) {
    if (typeof matchday === 'number') {
      this.currentMatchday = matchday;
    } else if (matchday === 'previous') {
      this.currentMatchday--;
    } else if (matchday === 'next') {
      this.currentMatchday++;
    }
  }

}
