import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tvshows',component:TvshowComponent},
  {path:'people',component:PeopleComponent},
  {path:'networks',component:NetworkComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'details/:type/:id',component:DetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
