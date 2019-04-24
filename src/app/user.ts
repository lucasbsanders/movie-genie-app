import { Movie } from './movie';

export interface User {
  username: string;
  password: string;
  twitter: string;
  movie?: Movie;
  archive?: Movie[];
}
