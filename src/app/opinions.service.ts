import { Injectable } from '@angular/core';
import { DetailAvisComponent } from './detail-avis/detail-avis.component';
import { OPINIONS } from './mock-film-opinion';
import { Opinion } from './opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  opinionCourant:string;
  noteCourante:string;
  idFilmCourant:number;

  opinions:Array<Opinion> = OPINIONS;

  constructor() { }

  addOpinion():void{
    var uneOpinion:Opinion = {
      id:Math.floor(Math.random() * 10),
      avis:this.opinionCourant,
      note:this.noteCourante,
      idFilm:this.idFilmCourant
    }
    this.opinions.push(uneOpinion);

    //Remise a zero
    this.opinionCourant = "";
    this.noteCourante = "";
    this.idFilmCourant = 0;
  }

  deleteOpinion(uneOpinion:Opinion):void{
    var index = this.opinions.indexOf(uneOpinion);
    this.opinions.splice(index,1);
  }

  saveOpinion(uneOpinion:Opinion):void{
    var index = this.opinions.indexOf(uneOpinion);
    this.opinions.splice(index,1);
    this.opinions.push(uneOpinion);
  }

  getOpinionList():Opinion[]{
    return OPINIONS;
  }

  getOpinionId(filmId:number):Opinion | undefined{
    console.log(filmId);
    return OPINIONS.find(avis => avis.idFilm == filmId)
  }
}
