import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroesDetailComponent } from '../heroes-detail/heroes-detail.component';


export const routes :Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroesDetailComponent },
  { path: 'hero/:id/:edit', component: HeroesDetailComponent},
  { path: 'hero/:post', component: HeroesDetailComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
