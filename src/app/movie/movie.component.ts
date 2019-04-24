import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie : Movie;
  movies : Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovies();
    this.getMovie();
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  getMovie(): void {
    this.movie = this.movieService.getMovie();
  }

}
