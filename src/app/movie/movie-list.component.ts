import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from './models/movie';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  constructor (private movieService: MovieService, public router: Router, private navbarService: NavbarService){}

  ngOnInit(): void {
    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navbarService.title.next("MovieNight");
  }

}
