import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CollectionComponent } from "./collection/collection.component";
import { DetailMovieComponent } from "./detail-movie/detail-movie.component";
import { FilmService } from "./film.service";
import { HomeComponent } from "./home/home.component";
import { ListMovieComponent } from "./list-movie/list-movie.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { ResultSearchComponent } from "./result-search/result-search.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "films", component: ListMovieComponent },
  { path: "profile", component: ProfileComponent },
  { path: "collection", component: CollectionComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "films/:id", component: DetailMovieComponent },
  { path: "results/:keyword", component: ResultSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
