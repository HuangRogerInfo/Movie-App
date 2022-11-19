import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenreColor'
})
export class MovieGenreColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'sci-fi':
        color = 'is-dark';
        break;
      case 'action':
        color = 'is-danger';
        break;
      case 'animation':
        color = 'is-success';
        break;
      case 'musical':
        color = 'is-warning';
        break;
      case 'drame':
        color = 'is-black';
        break;
      default:
        color = 'is-primary';
        break;
    }
    return 'tag ' + color;
  }

}