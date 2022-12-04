import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Opinion } from '../opinion';
import { OpinionsService } from '../opinions.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  opinion: Opinion | undefined;
  editForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public opinionsService: OpinionsService,
    public filmService: FilmService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get('id');
    if (filmId) {
      this.opinion = this.opinionsService.getOpinionId(+filmId);
    }


    var defautAvis = "";
    if (this.opinion) {
      if (this.opinion.avis) {
        defautAvis = this.opinion.avis;
      }
    }

    this.editForm = this.formBuilder.group({
      avis: [defautAvis]
    })
  }

  onSubmit() {
    if (this.opinion) {
      var newOpinion: Opinion = {
        idFilm: this.opinion.idFilm,
        avis: this.editForm.get('avis')?.value,
        note: this.opinion.note
      }

      this.opinionsService.saveOpinion(newOpinion);
    }
    this.router.navigate(["/collection"])
  }
}
