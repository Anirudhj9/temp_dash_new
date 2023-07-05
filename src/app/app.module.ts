import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, provideRouter, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { AppHomePage } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { AppMainHeader } from '../app/mainheader/mainheader.component';
import { AppLoginPage } from './login/login.component';
import { AppRegisterPage } from './register/register.component';
import { AppAboutPage } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: AppHomePage },
  { path: 'login', component: AppLoginPage },
  { path: 'register', component: AppRegisterPage },
  { path: 'about', component: AppAboutPage },
];
export const routerProviders = [provideRouter(routes)];

@NgModule({
  declarations: [
    AppComponent,
    AppMainHeader,
    AppHomePage,
    AppLoginPage,
    AppRegisterPage,
    AppAboutPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
