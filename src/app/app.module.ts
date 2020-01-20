import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';


const Router: Routes =[
   {path:'', component:HomeComponent},
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'profile',component:ProfileComponent},
  {path:'***', component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    SearchComponent,
    ProfileComponent,
   
  ],
  imports: [BrowserModule,FormsModule,RouterModule,HttpClientModule, CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),RouterModule.forRoot(Router)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
