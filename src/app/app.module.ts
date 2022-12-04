import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ListMovieComponent } from "./list-movie/list-movie.component";
import { DetailMovieComponent } from "./detail-movie/detail-movie.component";
import { MovieGenreColorPipe } from "./movie-genre-color.pipe";
import { CollectionComponent } from "./collection/collection.component";
import { ProfileComponent } from "./profile/profile.component";
import { MovieFormComponent } from "./movie-form/movie-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DetailAvisComponent } from "./detail-avis/detail-avis.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ResultSearchComponent } from './result-search/result-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListMovieComponent,
    DetailMovieComponent,
    MovieGenreColorPipe,
    CollectionComponent,
    ProfileComponent,
    MovieFormComponent,
    DetailAvisComponent,
    EditFormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResultSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
