import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie, movies } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private API_URL = 'http://localhost:3000/movies';

  getMoviesFromHttp(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.API_URL);
  }

  getMoviesByID(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.API_URL}/${id}`);
  }

  addMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.API_URL, movie);
  }

  getMovies(){
    return of(movies);
  }

  movie(id: number){
    return of(movies.find(movie => movie.id === +id));
  }
}
