import { Injectable } from "@angular/core";
import { Film } from "./film";
import { FILMS } from "./mock-film-list";
import { HttpClient } from "@angular/common/http";

const FILMS_ENDPOINT = "http://localhost:3000/films";
const USERS_ENDPOINT = "http://localhost:3000/users";

@Injectable()
export class FilmService {
  constructor(private http: HttpClient) {}
  getFilmList(): Film[] {
    return FILMS;
  }

  getLatestFilms(): any {
    return this.http.get(`${FILMS_ENDPOINT}/latest`);
    // return FILMS;
  }

  getFilmId(filmId: number): any {
    // return this.http.get(`${FILMS_ENDPOINT}/${filmId}`);
    return FILMS.find((film) => film._id == filmId);
  }

  getFilmTypeList(): string[] {
    return ["sci-fi", "action", "animation", "drame", "musical"];
  }

  getFavFilms(userId: string): any {
    return this.http.get(`${USERS_ENDPOINT}/${userId}/list`);
  }
}
