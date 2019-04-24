import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  movies: Movie[];
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.movieService.getMovies();
  }

}
