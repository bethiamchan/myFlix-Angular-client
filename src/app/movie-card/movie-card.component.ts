import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Brings in API calls
import { GetAllMovies, AddFavoriteMovie } from '../fetch-api-data.service';

import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMoviesIDs: any[] = [];

  constructor(
    public fetchApiData: GetAllMovies,
    public fetchApiDataFavortie: AddFavoriteMovie,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }

  addToFavorites(id: string, Title: string): void {
    this.fetchApiDataFavortie.addFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open(`${Title} has been added to your favorites.`, 'OK', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });

    setTimeout(() => {
      this.getMovies();
    }, 100);
  }

  openDetailsDialog(Description: string, Image: string, Title: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: { Description, Image, Title },
      width: '400px',
      height: '400px',
    });
  }

  openGenreDialog(Name: string, Description: string): void {
    this.dialog.open(MovieGenreComponent, {
      data: { Name, Description },
      width: '400px',
      height: '400px',
    });
  }

  openDirectorDialog(Name: string, Bio: string, Birth: string): void {
    this.dialog.open(MovieDirectorComponent, {
      data: { Name, Bio, Birth },
      width: '400px',
      height: '400px',
    });
  }
}
