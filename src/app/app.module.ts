import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInFormComponent } from './sign-in/components/sign-in-form/sign-in-form.component';
import { HomePageModule } from './home/home.module';
import { SignInPage } from './sign-in/sign-in.page';
import { SignInModule } from './sign-in/sign-in.module';
import { RegisterModule } from './register/register.module';
import { PicsModule } from './pics/pics.module';
import { ClipsModule } from './clips/clips.module';
import { ProfilesModule } from './profiles/profiles.module';
import { TunesModule } from './tunes/tunes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AppRoutingModule,
    SignInModule,
    RegisterModule,
    PicsModule,
    ClipsModule,
    ProfilesModule,
    TunesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
