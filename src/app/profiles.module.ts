import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilesListComponent } from './profiles/components/profiles-list/profiles-list.component';
import { ProfilesPage } from './profiles/profiles.page';
import { ProfileEditionComponent } from './profiles/components/profile-edition/profile-edition.component';



@NgModule({
  declarations: [
    ProfilesListComponent,
    ProfileEditionComponent,
    ProfilesPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProfilesModule { }
