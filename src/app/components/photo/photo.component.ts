import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from './photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo: PhotoModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
