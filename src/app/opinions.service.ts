import { Injectable } from '@angular/core';
import { OPINIONS } from './mock-film-opinion';
import { Opinion } from './opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {

  opinionContent:string;
  opinionNote:string;

  opinions:Array<Opinion> = OPINIONS;

  constructor() { }

  addOpinion():void{
    var uneOpinion:Opinion = {
      id:Math.floor(Math.random() * 10),
      avis:this.opinionContent,
      note:this.opinionNote
    }
    this.opinionContent = "";
    this.opinionNote = "";
    this.opinions.push(uneOpinion);
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
}
