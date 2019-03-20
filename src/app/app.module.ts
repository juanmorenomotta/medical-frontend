import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { SearchComponent } from './pages/search/search.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { CommentComponent } from './pages/comment/comment.component';
import { RegisterCommentComponent } from './pages/register-comment/register-comment.component';

import { SearchService } from './services/search.service';
import { SpecialtysService } from './services/specialtys.service';
import { CitiesService } from './services/cities.service';

import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
    SearchComponent,
    DoctorComponent,
    CommentComponent,
    RegisterCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    SearchService,
    SpecialtysService,
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
