import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { DetailAvisComponent } from './detail-avis/detail-avis.component';
import { FilmService } from './film.service';
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
    console.log("beforesaved",this.opinions);
    
    var toReplace = this.opinions.find(avis => avis.idFilm == uneOpinion.idFilm);
    if(toReplace){
      var index = this.opinions.indexOf(toReplace);
      this.opinions.splice(index,1);
      this.opinions.push(uneOpinion);
      console.log("saved",this.opinions);
    }
    else{
      console.log("not saved ! no existing opinions on this movie");
    }
  }

  getOpinionList():Opinion[]{
    return OPINIONS;
  }

  getOpinionId(filmId:number):Opinion | undefined{
    console.log(filmId);
    return OPINIONS.find(avis => avis.idFilm == filmId)
  }
}
