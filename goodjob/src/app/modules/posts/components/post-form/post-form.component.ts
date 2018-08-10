import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() post: Post;
  @Output() save = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (!this.post) {
      this.post = {title: ''};
    }
  }

  onSubmit() {
    this.save.emit({...this.post});
  }
}
