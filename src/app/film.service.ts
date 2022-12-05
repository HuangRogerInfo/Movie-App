import { Injectable } from "@angular/core";
import { Film } from "./film";
import { FILMS } from "./mock-film-list";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

const FILMS_ENDPOINT = "http://localhost:3000/films";
const USERS_ENDPOINT = "http://localhost:3000/users";

@Injectable()
export class FilmService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  listFilmsSearched: Film[] | undefined;
  getFilmList(): Film[] {
    return FILMS;
  }

  getResultSearch(keyword: string): any {
    return this.http.get(`${FILMS_ENDPOINT}/search?keywords=${keyword}`);
  }
  getLatestFilms(): Observable<any> {
    return this.http.get(`${FILMS_ENDPOINT}/latest`);
    // return FILMS;
  }

  getFilmId(filmId: number): any {
    return this.http.get(`${FILMS_ENDPOINT}/${filmId}`);
    //return FILMS.find((film) => film._id == filmId);
  }

  getFilmTypeList(): string[] {
    return ["sci-fi", "action", "animation", "drame", "musical"];
  }

  getFavFilms(userId: string): Observable<any> {
    return this.http.get(`${USERS_ENDPOINT}/${userId}/list`);
  }

  getResult(keywords: string): any {
    var data = this.getResultSearch(keywords);
    console.log("DATA : ", data);
  }
  isFilmAdded(filmId: number) {
    // console.log(this.auth.connectedUser.data.favFilms.find((film: number) => film === filmId));
    return this.auth.connectedUser?.data?.favFilms?.find(
      (film: number) => film === filmId
    );
  }

  deleteFilmFromCollection(filmId: number, userId: string): Observable<any> {
    return this.http.delete(`${USERS_ENDPOINT}/${userId}/list/${filmId}`);
  }

  addFilmToCollection(filmId: number, userId: string) {
    return this.http.put(`${USERS_ENDPOINT}/${userId}/list`, {
      filmId,
    });
  }
}
