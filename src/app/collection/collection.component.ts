import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Film } from "../film";
import { FilmService } from "../film.service";
import { Opinion } from "../opinion";
import { OpinionsService } from "../opinions.service";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  filmList: Film[];
  opinionList: Opinion[];

  constructor(
    private router: Router,
    public filmService: FilmService,
    public opinionsService: OpinionsService
  ) {}

  userId: string = "1";
  ngOnInit(): void {
    this.filmService.getFavFilms(this.userId).subscribe((favFilms: Film[]) => {
      this.filmList = favFilms;
    });
    this.filmList = this.filmService.getFilmList();
    this.opinionList = this.opinionsService.getOpinionList();
  }

  goToAvisFilm(film: Film | undefined) {
    if (film) {
      this.router.navigate(["/avis", film._id]);
    } else {
      this.router.navigate(["/errorpage"]);
    }
  }

  goToEditFilm(film: Film | undefined) {
    if (film) {
      this.router.navigate(["/edit", film._id]);
    } else {
      this.router.navigate(["/errorpage"]);
    }
  }
}
