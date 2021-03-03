# myFlix-Angular-client
This project is an Angular application that allows users to get information about movies, genres, and directors. Users can also save movies in their list of favorites and edit details of their profile. This application uses an existing server-side REST API and MongoDB database.

### [The application is deployed here.](https://bethiamchan.github.io/myFlix-Angular-client/)
<br/>
<br/>

# Screenshots
![Welcome screen](src/assets/myFlix-welcome.jpg)

![Main view with all movies](src/assets/myFlix-mainView.jpg)

![Profile view](src/assets/myFlix-profile.jpg)
<br/>
<br/>

# Features
* Displays a welcome screen where users can log in or register for a new account.
* Users are authenticated, then they can view all movies.
* In the main view showing all movies, users can click on buttons to view:
  * a description about the movie.
  * the genre of the movie and details about the genre.
  * the director of the movie and details about the director.
* In this main view, users can add and remove movies from their list of favorites.
* Users can also view their profile where they can see their favorite movies, remove movies from their favorites, and edit their profile details.
<br/>
<br/>

# Technologies
* Requires Node.js and npm
* Code written in Angular
* Designed using Angular Material
* Documented using Typedoc
<br/>
<br/>

# Development Server
To run this project on a development server, run the following command, then navigate to the localhost port stated in your terminal.
```bash
ng serve
```