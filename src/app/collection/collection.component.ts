import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Film } from "../film";
import { FilmService } from "../film.service";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  filmList: Film[];

  // updateRating(newRate: number, opinion: Opinion) {
  //   this.opinionsService.updateNote(opinion, newRate);
  // }

  updateRating() {}

  constructor(
    private router: Router,
    public filmService: FilmService,
    private authService: AuthService,
  ) {}

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

  deleteFromCollection(filmId: number) {
    this.filmService
      .deleteFilmFromCollection(
        filmId,
        this.authService.connectedUser.data.userId
      )
      .subscribe(
        (user: any) => {
          this.filmList = this.filmList.filter((film: Film) =>
            user.favFilms.find((f: number) => f === film._id)
          );
        },
        (error) => console.log(error)
      );
  }
}
