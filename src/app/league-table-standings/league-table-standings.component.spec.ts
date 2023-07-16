import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableStandingsComponent } from './league-table-standings.component';

describe('LeagueTableStandingsComponent', () => {
  let component: LeagueTableStandingsComponent;
  let fixture: ComponentFixture<LeagueTableStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueTableStandingsComponent]
    });
    fixture = TestBed.createComponent(LeagueTableStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
