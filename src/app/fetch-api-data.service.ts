import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declaring the API URL that will provide data for the client app
const apiUrl = 'https://bchanmyflix.herokuapp.com/';

// USER REGISTRATION
@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// USER LOGIN
@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the login endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// GET ALL MOVIES
@Injectable({
  providedIn: 'root',
})
export class GetAllMovies {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the all movies endpoint
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// GET ONE MOVIE
@Injectable({
  providedIn: 'root',
})
export class GetOneMovie {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the movie by title endpoint
  getOneMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/:Title', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// GET DIRECTOR
@Injectable({
  providedIn: 'root',
})
export class GetDirector {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the director endpoint
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/directors/:Name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// GET GENRE
@Injectable({
  providedIn: 'root',
})
export class GetGenre {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the genre endpoint
  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/genres/:Name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// GET USER
@Injectable({
  providedIn: 'root',
})
export class GetUser {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the user endpoint
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:Username', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// GET FAVORITE MOVIE FOR USER
@Injectable({
  providedIn: 'root',
})
export class GetFavoriteMovies {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the add favorite movie endpoint
  getFavoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:Username/favorites', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// ADD MOVIE TO LIST OF FAVORITES
@Injectable({
  providedIn: 'root',
})
export class AddFavoriteMovie {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the user favorites endpoint
  addFavoriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:Username/movies/:MovieID', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// EDIT USER
@Injectable({
  providedIn: 'root',
})
export class EditUser {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the edit user endpoint
  editUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:Username', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// DELETE USER
@Injectable({
  providedIn: 'root',
})
export class DeleteUser {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the delete user endpoint
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:Username', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}

// DELETE MOVIE FROM LIST OF FAVORITES
@Injectable({
  providedIn: 'root',
})
export class DeleteFavoriteMovie {
  // Inject the HttpClient module to the constructor params,
  // which will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making the API call for the delete favorite movie endpoint
  deleteFavoriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/:Usernameusers/:Username/movies/:MovieID', {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Object): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again.');
  }
}
