import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Film } from "../film";
import { FilmService } from "../film.service";
import { DomSanitizer } from "@angular/platform-browser";
import { NoteService } from "../note.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-detail-movie",
  templateUrl: "./detail-movie.component.html",
  styleUrls: ["./detail-movie.component.scss"],
})
export class DetailMovieComponent implements OnInit {
  filmList: Film[];
  film: Film | undefined;
  rating: number | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private filmService: FilmService,
    private noteService: NoteService,
    private authService: AuthService
  ) {
    this.rating = null;
  }

  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get("id");

    if (filmId) {
      this.filmService.getFilmId(+filmId).subscribe(
        (film: any) => {
          this.film = film;
          if (this.authService.connectedUser) {
            //@ts-ignore
            this.noteService.getNote(this.film?._id).subscribe((n) => {
              if (n?.length && n.length >= 1) {
                this.rating = n[0].rating;
              }
            });
          }
        },
        (error: any) => console.log(error)
      );
    }
  }

  goToFilmList() {
    this.router.navigate(["/films"]);
  }

  sanitizeUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
