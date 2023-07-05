import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
//import { LoginUsersService } from '../login-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class AppRegisterPage implements OnInit {
  errorMessage = '';
  //dateOfBirth = FormControl;
  //currentDate = Date;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router //private userService: LoginUsersService
  ) {}
  public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    confirmPassword: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  signUp(): void {
    //if (this.registerForm.invalid) {
    //  return;
    //}
    /*const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    this.userService.validateCredentials(email, password).subscribe(
      (isValid: any) => {
        if (isValid) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'An error occurred during login.';
      }
    );*/
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
          ],
        ],
        dateOfBirth: ['', [Validators.required], [this.dateOfBirthValidator()]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
        ],
        //username: ['', [Validators.required, Validators.minLength(3)], [usernameAvailabilityValidator(this.usernameValidator)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
            ),
          ],
        ],
      },
      { validator: this.passwordMatchValidator }
    );
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  dateOfBirthValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        const selectedDate = new Date(control.value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
          resolve({ invalidDateOfBirth: true });
        } else {
          resolve(null);
        }
      });
    };
  }
  /*isInvalidEmail(): boolean {
    const emailControl = this.registerForm.get('email');
    return emailControl.invalid && (emailControl.dirty || emailControl.touched);
  }
  isInvalidPhoneNumber(): boolean {
    const phoneNumberControl = this.registerForm.get('phoneNumber');
    return (
      phoneNumberControl.invalid &&
      (phoneNumberControl.dirty || phoneNumberControl.touched)
    );
  }*/
}
