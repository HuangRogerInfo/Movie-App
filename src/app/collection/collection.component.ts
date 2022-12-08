import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Film } from "../film";
import { FilmService } from "../film.service";
import { NoteService } from "../note.service";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  filmList: Film[];
  noteList: any[];

  // updateRating(newRate: number, opinion: Opinion) {
  //   this.opinionsService.updateNote(opinion, newRate);
  // }

  updateRating() {}

  constructor(
    private router: Router,
    public filmService: FilmService,
    private authService: AuthService,
    private noteService: NoteService
  ) {
    this.noteList = [];
    this.filmList = [];
  }

  ngOnInit(): void {
    if (this.authService.connectedUser) {
      this.filmService
        .getFavFilms(this.authService.connectedUser?.data?.userId)
        .subscribe((favFilms: Film[]) => {
          this.filmList = favFilms;
          this.filmList.map((film) => {
            this.noteService.getNote(film._id).subscribe((note) => {
              this.noteList = this.noteList.concat(note);
            });
          });
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

  updateNote(filmId: number, rating: number) {
    const note = this.noteList.find((note) => note.filmId === filmId);
    console.log(this.noteList);
    this.noteService
      .updateNote(note._id.toString(), rating)
      .subscribe((note) => {
        this.noteList = this.noteList.filter(
          //@ts-ignore
          (n) => n._id.toString() !== note._id.toString()
        );
        this.noteList = this.noteList.concat([note]);
      });
  }

  findFilmRating(filmId: number) {
    const note = this.noteList.find((note) => note.filmId === filmId);
    return note?.rating ?? 0;
  }
}
