import { Component } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent {


  currentMatchday = 1;
  totalMatchdays = 7;

  matches = [
    // Matches for each matchday
    [
      // Matchday 1
      { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
      { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
      { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
      { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    ],
    [
      // Matchday 2
      { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
      { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
      { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
      { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    ],
    [
      // Matchday 3
      { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
      { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
      { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
      { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    ],
    [
      // Matchday 4
      { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
      { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
      { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
      { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    ],
    [
      // Matchday 5
      { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
      { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'P. Congreso' },
      { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
      { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    ],
    [
      // Matchday 6
      { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
      { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
      { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
      { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
     
    ],
    [
      // Matchday 7
      { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
      { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
      { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
      { equipoLocal: 'P. Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    ],
    
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
