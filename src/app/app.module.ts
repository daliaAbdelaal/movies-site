import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SearchTvPipe } from './search-tv.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvshowComponent,
    PeopleComponent,
    AboutComponent,
    NetworkComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SearchPipe,
    SearchTvPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
