import { Component } from '@angular/core';

@Component({
  selector: 'app-post-collapse',
  templateUrl: './post-collapse.component.html',
  styleUrls: ['./post-collapse.component.css']
})
export class PostCollapseComponent {

  emojiSelected: any = {
    id: 'smiley',
    name: 'Smiling Face with Open Mouth',
    colons: ':smiley:',
    text: ':)',
    emoticons: [
      '=)',
      '=-)'
    ],
    skin: null,
    native: '😃'
  }
  showEmojis: boolean = false;
  
  constructor() { 
  }

  toggled: boolean = false;

  handleShowEmojis() {
    this.showEmojis = !this.showEmojis;
  }

  handleEmojiSelect(event: any) {
    this.emojiSelected = event.emoji;
  }
}
