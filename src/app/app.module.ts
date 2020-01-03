import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CricetComponent } from './cricet/cricet.component';
import { HeaderComponent } from './header/header.component';

const Router: Routes =[
  //  {path:'', component:HomeComponent},
   {path:'cricet',component:CricetComponent},
  {path:'***', component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    CricetComponent,
    HeaderComponent,
   
  ],
  imports: [BrowserModule,FormsModule,RouterModule,HttpClientModule,RouterModule.forRoot(Router)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
