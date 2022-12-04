import { Film } from './film';

export const FILMS: Film[] = [
  {
    _id: 1,
    title: 'Interstellar',
    categories: ['sci-fi', 'action'],
    coverPic:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    releaseDate: new Date(),
  },
  {
    _id: 2,
    title: 'Top Gun : Maverick',
    categories: ['action'],
    coverPic:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    actors: ['Tom Cruise', 'Val Kilmer', 'Miles Teller'],
    releaseDate: new Date(),
  },
  {
    _id: 3,
    title: 'Coco',
    categories: ['animation'],
    coverPic:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    actors: ['Gad Elmaleh', 'Gérard Depardieu'],
    releaseDate: new Date(),
  },
  {
    _id: 4,
    title: 'Forrest Gump',
    categories: ['drame'],
    coverPic:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    releaseDate: new Date(),
  },
  {
    _id: 5,
    title: 'Gran Torino',
    categories: ['drame'],
    coverPic:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
    actors: ['Clint Eastwood', 'Scott Eastwood', 'Ahney Her'],
    releaseDate: new Date(),
  },
  {
    _id: 6,
    title: 'The Greatest Showman',
    categories: ['musical'],
    coverPic:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
    actors: ['Hugh Jackman', 'Zac Efron', 'Zendaya'],
    releaseDate: new Date(),
  },
];
