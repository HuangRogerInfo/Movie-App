import { Component, OnInit } from "@angular/core";
import { Film } from "../film";
import { OpinionsService } from "../opinions.service";
import { FilmService } from "../film.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-result-search",
  templateUrl: "./result-search.component.html",
  styleUrls: ["./result-search.component.scss"],
})
export class ResultSearchComponent implements OnInit {
  filmList: Film[] | undefined;
  keyword: any = "";
  constructor(
    public opinionService: OpinionsService,
    public filmService: FilmService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    var keyword: string | null = this.route.snapshot.paramMap.get("keyword");
    if (keyword) {
      this.filmService.getResultSearch(keyword).subscribe(
        (filmInfo: any) => {
          this.filmList = filmInfo.results;
        },
        (error: any) => {
          console.log("Erreur lors de la recherche", error);
        }
      );
    }
  }

  addToCollection(film: Film) {
    this.opinionService.addEmptyOpinion(film);
  }

  goToFilm(film: Film) {
    this.router.navigate(["/films", film._id]);
  }

  search(): any {
    this.router.navigate(["results", this.keyword]);
    var keyword: string | null = this.route.snapshot.paramMap.get("keyword");
    if (keyword) {
      this.filmService.getResultSearch(keyword).subscribe(
        (filmInfo: any) => {
          this.filmList = filmInfo.results;
        },
        (error: any) => {
          console.log("Erreur lors de la recherche", error);
        }
      );
    }
  }
}
