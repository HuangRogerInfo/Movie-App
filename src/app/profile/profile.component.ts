import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Film } from "../film";
import { FilmService } from "../film.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  filmList: Film[];
  noteList: any[];
  constructor(
    private router: Router,
    public authService: AuthService,
    public filmService: FilmService
  ) {
    this.filmList = [];
  }

  ngOnInit(): void {
    if (this.authService.connectedUser) {
      this.filmService
        .getFavFilms(this.authService.connectedUser?.data?.userId)
        .subscribe((favFilms: Film[]) => {
          this.filmList = favFilms;
        });
    } else {
      this.router.navigate(["/home"]);
    }
  }
  goToFilm(film: Film) {
    this.router.navigate(["/films", film._id]);
  }
}
