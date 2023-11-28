import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TheRightNowComponent } from './components/the-right-now/the-right-now.component';
import { TheNewStuffComponent } from './components/the-new-stuff/the-new-stuff.component';
import { HotPagesComponent } from './components/hot-pages/hot-pages.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TheRightNowComponent,
    TheNewStuffComponent,
    HotPagesComponent,
    FunFactsComponent,
    HeroBannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
