import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ProfileEditionComponent } from './components/profile-edition/profile-edition.component';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@NgModule({
  declarations: [
    ProfilePage,
    ProfileEditionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EmojiComponent
  ]
})
export class ProfileModule { }
