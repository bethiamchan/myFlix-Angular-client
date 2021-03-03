import { Component, OnInit, Input } from '@angular/core';

// Used to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// Brings in API calls
import { UserRegistrationService } from '../fetch-api-data.service';

// Used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // Sends the form inputs to the backend
  /**
   * Function that sends user input to the server to create a new user
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (response) => {
        this.dialogRef.close(); // This will close modal on success
        console.log(response);
        this.snackBar.open('Thanks for signing up!', 'OK', {
          duration: 3000,
          verticalPosition: 'top',
        });
      },
      (response) => {
        console.log(response);
        this.snackBar.open(
          'There was an issue signing up. Please try again.',
          'OK',
          {
            duration: 3000,
            verticalPosition: 'top',
          }
        );
      }
    );
  }
}
