import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments;
  @Output() chanceModalStatus = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    // @ts-ignore
    $('#commentModal').modal('show');
  }

  closeModal() {
    this.chanceModalStatus.emit();
  }
}
