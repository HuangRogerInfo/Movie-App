import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { DetailAvisComponent } from './detail-avis/detail-avis.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FilmService } from './film.service';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { LoginComponent } from './login/login.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: ListMovieComponent },
  { path: 'films', component: ListMovieComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'add', component: MovieFormComponent },
  { path: 'films/:id', component: DetailMovieComponent },
  { path: 'avis/:id', component: DetailAvisComponent },
  { path: 'edit/:id', component: EditFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
