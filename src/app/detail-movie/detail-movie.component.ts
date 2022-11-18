import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  filmList: Film[];
  film: Film | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get('id');

    if (filmId) {
      this.film = this.filmService.getFilmId(+filmId);
    }
  }

  goToFilmList() {
    this.router.navigate(['/films']);
  }

}
