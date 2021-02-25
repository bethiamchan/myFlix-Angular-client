import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import {
  EditUser,
  GetAllMovies,
  GetUser,
  GetFavoriteMovies,
  DeleteUser,
  DeleteFavoriteMovie,
} from '../fetch-api-data.service';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };
  movies: any[] = [];
  favoriteMovies: any[] = [];
  favoriteMoviesIDs: any[] = [];

  constructor(
    public fetchApiData: EditUser,
    public fetchApiDataAllMovies: GetAllMovies,
    public fetchApiDataUser: GetUser,
    public fetchApiDataFavoriteMovies: GetFavoriteMovies,
    public fetchApiDataDeleteUser: DeleteUser,
    public fetchApiDataDeleteFavorite: DeleteFavoriteMovie,
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFavoriteMovies();
  }

  getFavoriteMovies(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.fetchApiDataUser.getUser(user).subscribe((resp: any) => {
        this.favoriteMoviesIDs = resp.FavoriteMovies;
        return this.favoriteMoviesIDs;
      });
    }
    setTimeout(() => {
      this.getMovies();
    }, 100);
  }

  getMovies(): void {
    this.fetchApiDataAllMovies.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.movies.forEach((movie) => {
        if (this.favoriteMoviesIDs.includes(movie._id))
          this.favoriteMovies.push(movie);
      });
      return this.favoriteMovies;
    });
  }

  deleteFavoriteMovie(id: string): void {
    this.fetchApiDataDeleteFavorite
      .deleteFavoriteMovie(id)
      .subscribe((resp: any) => {
        console.log(resp);
        window.location.reload();
      });
  }

  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe(
      (result) => {
        console.log(result);
        this.snackbar.open('Your profile has been updated.', 'OK', {
          duration: 3000,
          verticalPosition: 'top',
        });
      },
      (result) => {
        this.snackbar.open(result, 'OK', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }
    );
  }

  openDetailsDialog(Description: string, Image: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: { Description, Image },
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

  openDirectorDialog(Name: string, Bio: string, BirthYear: string): void {
    this.dialog.open(MovieDirectorComponent, {
      data: { Name, Bio, BirthYear },
      width: '400px',
      height: '400px',
    });
  }
}
