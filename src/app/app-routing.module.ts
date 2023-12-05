import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SignInPage } from './sign-in/sign-in.page';
import { RegisterPage } from './register/register.page';
import { PicsPage } from './pics/pics.page';
import { ProfilesPage } from './profiles/profiles.page';
import { TunesPage } from './tunes/tunes.page';
import { ClipsPage } from './clips/clips.page';
import { ProfilePage } from './profile/profile.page';


const routes: Routes = [
  {path:"home", component:HomePage},
  {path: "",redirectTo:"home", pathMatch:"full"},
  {path:"sign-in", component: SignInPage},
  {path:"register", component: RegisterPage},
  {path:"pics", component: PicsPage},
  {path:"profiles/:searchTerm", component: ProfilesPage},
  {path:"tunes", component: TunesPage},
  {path:"clips", component: ClipsPage},
  {path:"profile/:email", component: ProfilePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
