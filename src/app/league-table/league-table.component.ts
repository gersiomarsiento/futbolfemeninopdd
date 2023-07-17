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
      { equipoLocal: 'La Paloma', golesLocal: '1', golesVisitante: '5', equipoVisitante: 'Plaza Congreso' },
      { equipoLocal: 'La Estación', golesLocal: '7', golesVisitante: '8', equipoVisitante: 'Electras' },
      { equipoLocal: 'Las Piedras', golesLocal: '3', golesVisitante: '14', equipoVisitante: 'Bohemias' },
      { equipoLocal: 'La Abasto', golesLocal: '7', golesVisitante: '1', equipoVisitante: 'La Ola' },
    ],
    [
      // Matchday 2
      { equipoLocal: 'La Paloma', golesLocal: '11', golesVisitante: '4', equipoVisitante: 'Electras' },
      { equipoLocal: 'La Estación', golesLocal: '6', golesVisitante: '11', equipoVisitante: 'Plaza Congreso' },
      { equipoLocal: 'Las Piedras', golesLocal: '2', golesVisitante: '4', equipoVisitante: 'La Abasto' },
      { equipoLocal: 'La Ola', golesLocal: '2', golesVisitante: '13', equipoVisitante: 'Bohemias' },
    ],
    [
      // Matchday 3
      { equipoLocal: 'La Paloma', golesLocal: '7', golesVisitante: '7', equipoVisitante: 'La Estación' },
      { equipoLocal: 'Electras', golesLocal: '2', golesVisitante: '9', equipoVisitante: 'Plaza Congreso' },
      { equipoLocal: 'Las Piedras', golesLocal: '5', golesVisitante: '5', equipoVisitante: 'La Ola' },
      { equipoLocal: 'La Abasto', golesLocal: '13', golesVisitante: '2', equipoVisitante: 'Bohemias' },
    ],
    // Matches for each matchday
    // APERTURA + CLAUSURA
    // [
    //   // Matchday 1
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Plaza Congreso' },
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    //   { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    // ],
    // [
    //   // Matchday 2
    //   { equipoLocal: 'Plaza Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    //   { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    // ],
    // [
    //   // Matchday 3
    //   { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Plaza Congreso' },
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
    //   { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    // ],
    // [
    //   // Matchday 4
    //   { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
    //   { equipoLocal: 'Bohemias', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    //   { equipoLocal: 'Plaza Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    //   { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    // ],
    // [
    //   // Matchday 5
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    //   { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Plaza Congreso' },
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    // ],
    // [
    //   // Matchday 6
    //   { equipoLocal: 'Electras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Paloma' },
    //   { equipoLocal: 'Plaza Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Ola' },
    //   { equipoLocal: 'Las Piedras', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Abasto' },
    //   { equipoLocal: 'La Estación', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
     
    // ],
    // [
    //   // Matchday 7
    //   { equipoLocal: 'La Abasto', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Electras' },
    //   { equipoLocal: 'La Ola', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Bohemias' },
    //   { equipoLocal: 'La Paloma', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'Las Piedras' },
    //   { equipoLocal: 'Plaza Congreso', golesLocal: '-', golesVisitante: '-', equipoVisitante: 'La Estación' },
    // ],
    
  ];
  equipos =[ //All teams' stats
  {
    name: "La Paloma",
    serie: "A",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "Plaza Congreso",
    serie: "A",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "Electras",
    serie: "A",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "La Estación",
    serie: "A",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "Bohemias",
    serie: "B",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "La Abasto",
    serie: "B",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "Las Piedras",
    serie: "B",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  },
  {
    name: "La Ola",
    serie: "B",
    jugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferencia: 0, 
    puntos: 0
  }
  ]
  equiposSerieA = this.equipos.filter(e => e.serie === 'A');
  equiposSerieB = this.equipos.filter(e => e.serie === 'B');

  ngOnInit() {
    this.extractTeamInfo(); // Call the method during component initialization to retrieve matchdays data
    const sortTeamsByCriteria = (a: any, b: any) => { //Sort groups with matchday data to prompt on league table
      if (b.puntos !== a.puntos){
        return b.puntos - a.puntos // First criteria - POINTS
      } else if (b.diferencia !== a.diferencia){
        return b.diferencia - a.diferencia // Second criteria - GOAL DIFF
      } else {
        return b.golesFavor - a.golesFavor // Third criteria - GOALS +
      }
    }
    this.equiposSerieA.sort(sortTeamsByCriteria); 
    this.equiposSerieB.sort(sortTeamsByCriteria)
  }

  get pages() {
    return Array(this.totalMatchdays).fill(0).map((_, index) => index + 1);
  }

  navigateMatchday(matchday: number | string) { // For fixture pagination
    if (typeof matchday === 'number') {
      this.currentMatchday = matchday;
    } else if (matchday === 'previous') {
      this.currentMatchday--;
    } else if (matchday === 'next') {
      this.currentMatchday++;
    }
  }

  extractTeamInfo() { // Read matchdays and extract stats
    for (const matchday of this.matches) {
      for (const match of matchday) {
        if(match.golesLocal === "-"){ // Skip if game hasn't been played
          continue
        }
        // Store match stats into variables
        const localTeam = match.equipoLocal;
        const localGoals = parseInt(match.golesLocal, 10);
        const localPoints = localGoals > parseInt(match.golesVisitante, 10) ? 2 : localGoals === parseInt(match.golesVisitante, 10) ? 1 : 0;
        const visitanteTeam = match.equipoVisitante;
        const visitanteGoals = parseInt(match.golesVisitante, 10);
        const visitantePoints = visitanteGoals > localGoals ? 2 : visitanteGoals === localGoals ? 1 : 0;

        // Update the stats for the local team
        const localTeamIndex = this.equipos.findIndex(team => team.name === localTeam);
        if (localTeamIndex !== -1) {
          this.equipos[localTeamIndex].jugados++;
          this.equipos[localTeamIndex].puntos+=localPoints;
          this.equipos[localTeamIndex].golesFavor+=localGoals;
          this.equipos[localTeamIndex].golesContra+=visitanteGoals;
          localPoints===2?this.equipos[localTeamIndex].ganados++:localPoints===1?this.equipos[localTeamIndex].empatados++:this.equipos[localTeamIndex].perdidos++;
          this.equipos[localTeamIndex].diferencia+=(localGoals-visitanteGoals);
        }

        // Update the stats for the visiting team
        const visitanteTeamIndex = this.equipos.findIndex(team => team.name === visitanteTeam);
        if (visitanteTeamIndex !== -1) {
          this.equipos[visitanteTeamIndex].jugados++;
          this.equipos[visitanteTeamIndex].puntos+=visitantePoints;
          this.equipos[visitanteTeamIndex].golesFavor+=visitanteGoals;
          this.equipos[visitanteTeamIndex].golesContra+=localGoals;
          visitantePoints===2?this.equipos[visitanteTeamIndex].ganados++:visitantePoints===1?this.equipos[visitanteTeamIndex].empatados++:this.equipos[visitanteTeamIndex].perdidos++;
          this.equipos[visitanteTeamIndex].diferencia+=(visitanteGoals-localGoals);
        }
      }
    }
  }
}
