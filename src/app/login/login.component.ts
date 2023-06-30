import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserList } from '../../shared/userList.model';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class AppLoginPage implements OnInit {
  errorMessage = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  loginForm: FormGroup = new FormGroup({
    // Define your form controls here
    emailID: new FormControl(''),
    lastName: new FormControl(''),
    // ...other form controls
  });
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  signIn() {}
}
