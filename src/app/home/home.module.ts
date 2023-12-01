import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheNewStuffComponent } from './components/the-new-stuff/the-new-stuff.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HotPagesComponent } from './components/hot-pages/hot-pages.component';
import { TheRightNowComponent } from './components/the-right-now/the-right-now.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


@NgModule({
  declarations: [
    FunFactsComponent,
    HeroBannerComponent,
    HotPagesComponent,
    TheNewStuffComponent,
    TheRightNowComponent,
    HomePage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[
    FunFactsComponent,
    HeroBannerComponent,
    HotPagesComponent,
    TheNewStuffComponent,
    TheRightNowComponent,
  ]
})
export class HomePageModule { }
