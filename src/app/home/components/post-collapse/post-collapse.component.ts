import { Component } from '@angular/core';

@Component({
  selector: 'app-post-collapse',
  templateUrl: './post-collapse.component.html',
  styleUrls: ['./post-collapse.component.css']
})
export class PostCollapseComponent {

  emojiSelected: any;
  
  constructor() { 
  }

  toggled: boolean = false;
  
  handleSelection(event: any) {
    console.log(event.char);
  }

  handleEmojiSelect(event: any) {
    this.emojiSelected = event.emoji;
  }
}
