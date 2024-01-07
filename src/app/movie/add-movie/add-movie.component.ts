import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../../navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent implements OnInit {
  movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
    storyline: new FormControl('', [Validators.required]),
  });

  constructor(private navbarService: NavbarService,
    private movieService: MovieService,
    private router: Router){}

  ngOnInit(): void {
      this.navbarService.title.next("Add Movies");
  }

  addMovie(){
    if (this.movieForm.valid){
      var data = {
        id: 0,
        name: this.movieForm.get('name')?.value,
        genre: this.movieForm.get('genre')?.value,
        rating: this.movieForm.get('rating')?.value,
        releaseYear: this.movieForm.get('releaseYear')?.value,
        image: this.movieForm.get('image')?.value,
        storyline: this.movieForm.get('storyline')?.value
      }
      this.movieService.addMovie(data as unknown as Movie).subscribe(result => {
        this.movieForm.reset();
        this.router.navigateByUrl("/movies");
      })
    }
  }
}
