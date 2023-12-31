import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { SumateComponent } from './sumate/sumate.component';
import { EquipoComponent } from './equipo/equipo.component';
import { LigaComponent } from './liga/liga.component';
import { FooterComponent } from './footer/footer.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CarouselModule } from './carousel/carousel.module';
import { ContactoComponent } from './contacto/contacto.component';
import { ApoyanosComponent } from './apoyanos/apoyanos.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { GraciasComponent } from './gracias/gracias.component';
import { LeagueTableStandingsComponent } from './league-table-standings/league-table-standings.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    PostDetailComponent,
    HomeComponent,
    CommentsComponent,
    BannerComponent,
    SumateComponent,
    EquipoComponent,
    LigaComponent,
    FooterComponent,
    LeagueTableComponent,
    ContactFormComponent,
    ContactoComponent,
    ApoyanosComponent,
    UnderConstructionComponent,
    GraciasComponent,
    LeagueTableStandingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
