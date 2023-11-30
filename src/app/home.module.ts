import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheNewStuffComponent } from './home/components/the-new-stuff/the-new-stuff.component';
import { FunFactsComponent } from './home/components/fun-facts/fun-facts.component';
import { HeroBannerComponent } from './home/components/hero-banner/hero-banner.component';
import { HotPagesComponent } from './home/components/hot-pages/hot-pages.component';
import { TheRightNowComponent } from './home/components/the-right-now/the-right-now.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home/home.page';


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
