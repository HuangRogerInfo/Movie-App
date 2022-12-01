import { Injectable } from '@angular/core';
import { Film } from './film';
import { FILMS } from './mock-film-list';

@Injectable()
export class FilmService {
  getFilmList(): Film[] {
    return FILMS;
  }

  getFilmId(filmId: number): Film | undefined {
    return FILMS.find((film) => film.id == filmId);
  }

  getFilmTypeList(): string[] {
    return ['sci-fi', 'action', 'animation', 'drame', 'musical'];
  }
}
