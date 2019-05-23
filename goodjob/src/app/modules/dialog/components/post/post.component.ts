import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  content: '';
  mytext = '';
  lastPos = 0;
  emojiMartDiv = false;
  selectedFile = [];
  imagesPreview = {
    previews: [],
    type: ''
  };

  tiles: Tile[] = [
    { text: 'Two', cols: 6, rows: 2, color: 'lightgreen' },
    { text: 'Three 1', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Three 2', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Three 3', cols: 2, rows: 1, color: 'lightpink' },
  ];

  tiles2: Tile[] = [
    { text: 'Two', cols: 5, rows: 3, color: 'lightgreen' },
    { text: 'Three 1', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Three 2', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Three 2', cols: 2, rows: 1, color: 'lightpink' },
  ];

  tiles3: Tile[] = [
    { text: 'Two', cols: 2, rows: 3, color: 'lightgreen' },
    { text: 'Three 1', cols: 2, rows: 3, color: 'lightpink' },
  ];

  tiles4: Tile[] = [
    { text: 'Two', cols: 4, rows: 2, color: 'lightgreen' },
    { text: 'Three 1', cols: 4, rows: 2, color: 'lightpink' },
  ];

  tiles5: Tile[] = [
    { text: 'Two', cols: 3, rows: 4, color: 'lightgreen' },
    { text: 'Three 1', cols: 2, rows: 2, color: 'lightpink' },
    { text: 'Three 2', cols: 2, rows: 2, color: 'lightpink' },
  ];

  tiles6: Tile[] = [
    { text: 'Two', cols: 4, rows: 3, color: 'lightgreen' },
    { text: 'Three 1', cols: 2, rows: 2, color: 'lightpink' },
    { text: 'Three 2', cols: 2, rows: 2, color: 'lightpink' },
  ];

  tiles7: Tile[] = [
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three 1', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Three 2', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Three 2', cols: 1, rows: 1, color: 'lightpink' },
  ];

  @ViewChild('editContentField', { read: ElementRef }) private editContentField: ElementRef;
  @ViewChild('previewContentField', { read: ElementRef }) private previewContentField: ElementRef;
  @ViewChild('previewImage', { read: ElementRef }) private previewImage: ElementRef;

  constructor(private renderer: Renderer2) { }

  addEmoji(event) {
    const pos = this.editContentField.nativeElement.selectionStart;
    const value = this.editContentField.nativeElement.value;
    const newValue = [value.slice(0, pos), event.emoji.native, value.slice(pos)].join('');

    this.lastPos = pos;
    this.renderer.setProperty(this.editContentField.nativeElement, 'value', newValue);
    this.renderer.setProperty(this.previewContentField.nativeElement, 'value', newValue);
    this.editContentField.nativeElement.selectionStart = this.lastPos;
  }

  openEmojiMart() {
    if (this.emojiMartDiv) {
      this.emojiMartDiv = !this.emojiMartDiv;
    } else if (!this.emojiMartDiv) {
      this.emojiMartDiv = !this.emojiMartDiv;
    }
  }

  onAccept(evt) {
    const file = evt.file;
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      this.selectedFile.push(file);
    }
  }

  handleReaderLoaded(e) {
    const previewBase64 = 'data:image/png;base64,' + window.btoa(e.target.result);

    const i = new Image();

    i.onload = () => {
      console.log(i.width + ', ' + i.height);
    };

    i.src = previewBase64;

    this.imagesPreview.previews.push({
      pre: previewBase64,
      height: i.height,
      width: i.width
    });

    this.setGridForPreview();
  }

  setGridForPreview() {
    const totalImagesPreview = this.imagesPreview.previews.length;
    console.log(totalImagesPreview);
    switch (totalImagesPreview) {
      case 1:
        if (this.imagesPreview.previews[0].height === this.imagesPreview.previews[0].width) {
          this.imagesPreview.type = 'one-image';
        }
        break;
      case 2:
        console.log('case 2');
        if (this.imagesPreview.previews[0].width < this.imagesPreview.previews[0].height
          && this.imagesPreview.previews[1].width < this.imagesPreview.previews[1].height) {
          this.imagesPreview.type = 'two-image';
        }
        console.log(this.imagesPreview);
        break;
    }
  }

  onDeletedFile(e) {
    const fileName = e.file.name;
    const index = this.selectedFile.findIndex(i => i.name === fileName);
    this.imagesPreview.previews.splice(index, 1);
    this.selectedFile.splice(index, 1);
  }
}
