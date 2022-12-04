import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CollectionComponent } from "./collection/collection.component";
import { DetailAvisComponent } from "./detail-avis/detail-avis.component";
import { DetailMovieComponent } from "./detail-movie/detail-movie.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { FilmService } from "./film.service";
import { HomeComponent } from "./home/home.component";
import { ListMovieComponent } from "./list-movie/list-movie.component";
import { LoginComponent } from "./login/login.component";
import { MovieFormComponent } from "./movie-form/movie-form.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { ResultSearchComponent } from "./result-search/result-search.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "films", component: ListMovieComponent },
  { path: "profile", component: ProfileComponent },
  { path: "collection", component: CollectionComponent },
  { path: "add", component: MovieFormComponent },
  { path: "films/:id", component: DetailMovieComponent },
  { path: "avis/:id", component: DetailAvisComponent },
  { path: "edit/:id", component: EditFormComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "results/:keyword", component: ResultSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
