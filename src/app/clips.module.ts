import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipsListComponent } from './clips/components/clips-list/clips-list.component';
import { ClipsPage } from './clips/clips.page';



@NgModule({
  declarations: [
    ClipsListComponent,
    ClipsPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ClipsModule { }
