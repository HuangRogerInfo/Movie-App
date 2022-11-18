import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  filmList: Film[] | undefined;

  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.filmList = this.filmService.getFilmList();
  }

  goToFilm(film: Film) {
    this.router.navigate(["/films", film.id])
  }
}
