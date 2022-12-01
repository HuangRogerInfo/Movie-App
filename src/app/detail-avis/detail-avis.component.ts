import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Opinion } from '../opinion';
import { OpinionsService } from '../opinions.service';

@Component({
  selector: 'app-detail-avis',
  templateUrl: './detail-avis.component.html',
  styleUrls: ['./detail-avis.component.scss']
})
export class DetailAvisComponent implements OnInit {

  avis : Opinion | undefined;
  film: Film | undefined;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private filmService:FilmService,
    private opinionService:OpinionsService
  ) {}

  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get('id');

    if(filmId){
      this.avis = this.opinionService.getOpinionId(+filmId)
      this.film = this.filmService.getFilmId(+filmId);
    }
  }

}
