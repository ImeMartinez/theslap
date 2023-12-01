import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { ProfilesPage } from './profiles.page';



@NgModule({
  declarations: [
    ProfilesListComponent,
    ProfilesPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProfilesModule { }
