import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenreColor'
})
export class MovieGenreColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Science-Fiction':
        color = 'is-dark';
        break;
      case 'Action':
        color = 'is-danger';
        break;
      case 'Animation':
        color = 'is-success';
        break;
      case 'Fantastique':
        color = 'is-warning';
        break;
      case 'Thriller':
        color = 'is-black';
        break;
      default:
        color = 'is-primary';
        break;
    }
    return 'tag ' + color;
  }

}