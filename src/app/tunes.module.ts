import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TunesListComponent } from './tunes/components/tunes-list/tunes-list.component';
import { TunesPage } from './tunes/tunes.page';



@NgModule({
  declarations: [
    TunesListComponent,
    TunesPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TunesModule { }
