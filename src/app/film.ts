export class Film {
  _id: number;
  title: string;
  categories?: Array<string>;
  coverPic?: string;
  actors?: Array<string>;
  releaseDate?: Date;
  synopsis?: string;
  releaseCountry?: string;
  director?: string;
  trailerURL?: string;
  totalRatings?: number;
  avarageRating?: number;
  duration?: number;
}
