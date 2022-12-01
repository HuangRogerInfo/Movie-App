import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Opinion } from '../opinion';
import { OpinionsService } from '../opinions.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit{
  filmList: Film[] | undefined;
  opinionList: Opinion[] | undefined;

  constructor(
    public filmService: FilmService,
    public opinionsService : OpinionsService
  ) { }

  ngOnInit(): void {
    this.filmList = this.filmService.getFilmList();
    this.opinionList = this.opinionsService.getOpinionList();
  }
  
  onSubmit(){
  }
}
