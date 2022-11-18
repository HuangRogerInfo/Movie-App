import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { FilmService } from './film.service';
import { ListMovieComponent } from './list-movie/list-movie.component';


const routes: Routes = [
  { path: 'films', component: ListMovieComponent },
  { path: 'films/:id', component: DetailMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
