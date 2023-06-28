import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserList } from '../../shared/userList.model';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class AppLoginPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginForm: FormGroup
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  signIn() {}
}
