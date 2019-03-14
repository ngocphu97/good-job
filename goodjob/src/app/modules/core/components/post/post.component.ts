import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterViewInit {
  content: '';
  mytext = '';
  lastPos = 0;
  emojiMartDiv = false;
  selectedFile = [];
  imagesPreview = [];

  @ViewChild('editContentField', { read: ElementRef }) private editContentField: ElementRef;
  @ViewChild('previewContentField', { read: ElementRef }) private previewContentField: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
  }

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
    this.imagesPreview.push({
      pre: 'data:image/png;base64,' + window.btoa(e.target.result)
    });
  }

  onDeletedFile(e) {
    const fileName = e.file.name;
    const index = this.selectedFile.findIndex(i => i.name === fileName);
    this.imagesPreview.splice(index, 1);
    this.selectedFile.splice(index, 1);
  }
}
