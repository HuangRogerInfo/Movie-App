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
  trailerURL?: Array<string>;
  totalRatings?: number;
  avarageRating?: number;
  duration?: number;
  reviews?: Array<{ name?: string, content?: string, date?: string }>;
}
