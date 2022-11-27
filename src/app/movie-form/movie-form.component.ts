import { Component, OnInit } from '@angular/core';
import { OpinionsService } from '../opinions.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit{

  constructor(public opinionsService:OpinionsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
