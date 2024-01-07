import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie';
import { NavbarService } from '../../navbar/services/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id!: number | null;
  movie: Movie | undefined;
  movSub$!: Subscription;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private navbarService: NavbarService){ }

  ngOnInit(): void {
    var param = this.route.snapshot.paramMap.get('id') || 0;
    this.id = +param;
    this.movSub$ = this.movieService.getMoviesByID(this.id).subscribe(movie => {
      this.movie = movie;
      this.navbarService.title.next(movie?.name || "");
    } );
  }

  ngOnDestroy(): void {
    this.movSub$.unsubscribe();
  }

}
