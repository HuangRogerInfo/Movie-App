import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Film } from "../film";
import { FilmService } from "../film.service";

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"],
})
export class ListMovieComponent implements OnInit {
  filmList: Film[] | undefined;
  keyword: any = "";

  constructor(
    private router: Router,
    private filmService: FilmService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.filmService.getLatestFilms().subscribe(
      (films: any) => {
        this.filmList = films.results;
      },
      (error: any) => console.error(error)
    );
  }

  goToFilm(film: Film) {
    this.router.navigate(["/films", film._id]);
  }

  addToCollection(filmId: number) {
    const userId = this.authService.connectedUser?.data?.userId;
    this.filmService.addFilmToCollection(filmId, userId).subscribe((user) => {
      //@ts-ignore
      this.authService.connectedUser.data.favFilms = user.favFilms;
    });
  }

  isFilmAdded(filmId: number) {
    return this.filmService.isFilmAdded(filmId);
  }

  deleteFromCollection(filmId: number) {
    const userId = this.authService.connectedUser?.data?.userId;
    if (userId) {
      this.filmService.deleteFilmFromCollection(filmId, userId).subscribe(
        (user) => {
          this.authService.connectedUser.data.favFilms = user.favFilms;
        },
        (error: any) => console.error(error)
      );
    }
  }
  search(): any {
    this.router.navigate(["results", this.keyword]);
  }
}
