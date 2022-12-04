import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Film } from "../film";
import { FilmService } from "../film.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  keyword: any = "";
  // filmList: Film[];

  @Output() messageEvent = new EventEmitter<Film[]>();

  constructor(public filmService: FilmService, private router: Router) {}

  ngOnInit(): void {}

  search(): any {
    this.router.navigate(["results", this.keyword]);
  }
}
