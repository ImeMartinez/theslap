import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageModule } from './home/home.module';
import { SignInModule } from './sign-in/sign-in.module';
import { RegisterModule } from './register/register.module';
import { PicsModule } from './pics/pics.module';
import { ClipsModule } from './clips/clips.module';
import { ProfilesModule } from './profiles/profiles.module';
import { TunesModule } from './tunes/tunes.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    FormsModule,
    AppRoutingModule,
    SignInModule,
    RegisterModule,
    PicsModule,
    ClipsModule,
    ProfilesModule,
    TunesModule,
    ProfileModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
