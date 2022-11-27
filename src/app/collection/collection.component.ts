import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  filmList: Film[];

  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    console.table(this.filmList);
    this.filmList = this.filmService.getFilmList();
  }


  goToEditFilm(film: Film) {
    this.router.navigate(["/edit/film", film.id])
  }


}
