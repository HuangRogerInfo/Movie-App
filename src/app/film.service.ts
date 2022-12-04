import { Injectable } from "@angular/core";
import { Film } from "./film";
import { FILMS } from "./mock-film-list";
import { HttpClient } from "@angular/common/http";

const FILMS_ENDPOINT = "http://localhost:3000/films";
const USERS_ENDPOINT = "http://localhost:3000/users";

@Injectable()
export class FilmService {
  constructor(private http: HttpClient) {}

  listFilmsSearched: Film[] | undefined;
  getFilmList(): Film[] {
    return FILMS;
  }

  getResultSearch(keyword: string): any {
    return this.http.get(`${FILMS_ENDPOINT}/search?keywords=${keyword}`);
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

  getResult(keywords: string): any {
    var data = this.getResultSearch(keywords);
    console.log("DATA : ", data);
  }
}
