import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { FilmService } from './film.service';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: ListMovieComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'edit', component: MovieFormComponent },
  { path: 'films/:id', component: DetailMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
