import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PicsListComponent } from './pics/components/pics-list/pics-list.component';
import { PicsPage } from './pics/pics.page';



@NgModule({
  declarations: [
    PicsListComponent,
    PicsPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PicsModule { }
