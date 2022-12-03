import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Opinion } from '../opinion';
import { OpinionsService } from '../opinions.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  filmList: Film[];
  opinionList: Opinion[];
  addForm: FormGroup;

  constructor(
    public filmService: FilmService,
    public opinionsService: OpinionsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filmList = this.filmService.getFilmList();
    this.opinionList = this.opinionsService.getOpinionList();

    this.addForm = this.formBuilder.group({
      selectedFilm: [],
      note: [],
      avis: []
    })
  }

  getNewFilms(): Film[] {
    console.log("filmlist", this.filmList);
    console.log("opinionList", this.opinionList);

    var newfilms: Film[] = []
    if (this.opinionList && this.filmList) {
      this.filmList.forEach(element => {
        if ((this.opinionList?.find(opinion => opinion.idFilm == element.id)) == undefined) {
          newfilms.push(element)
        }
      });
    }
    console.log("newfilm", newfilms);
    return newfilms;
  }

  onSubmit() {
    var newOpinion: Opinion = {
      idFilm: +(this.addForm.get('selectedFilm')?.value),
      avis: this.addForm.get('avis')?.value,
      note: this.addForm.get('note')?.value
    }
    this.opinionsService.addNewOpinion(newOpinion);
  }
}
