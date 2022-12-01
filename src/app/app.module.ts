import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieGenreColorPipe } from './movie-genre-color.pipe';
import { CollectionComponent } from './collection/collection.component';
import { ProfileComponent } from './profile/profile.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';
import { DetailAvisComponent } from './detail-avis/detail-avis.component';
import { EditFormComponent } from './edit-form/edit-form.component';

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
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
