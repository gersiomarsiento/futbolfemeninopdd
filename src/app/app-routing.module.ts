import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { SumateComponent } from './sumate/sumate.component';
import { EquipoComponent } from './equipo/equipo.component';
import { LigaComponent } from './liga/liga.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'players/:variable',
    component: PostDetailComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'sumate',
    component: SumateComponent
  },
  {
    path: 'equipo',
    component: EquipoComponent
  },
  {
    path: 'liga',
    component: LigaComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
