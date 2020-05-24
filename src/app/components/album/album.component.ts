import {Component, Input, OnInit} from '@angular/core';
import {AlbumModel} from './album.model';
import {server} from '../../services/server';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../../services/auth/auth.service';
import {RequestPayload} from '../../shared/requestPayload.model';
import {NotificationService} from '../../services/notification/notification.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: AlbumModel;

  photos;
  comments: any = [];
  isCommentModalOpen: boolean;
  requestPayload: RequestPayload;

  constructor(private spinner: NgxSpinnerService,
              private authService: AuthService,
              private notification: NotificationService) {
    this.requestPayload = new RequestPayload();
    this.isCommentModalOpen = false;
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  openModal() {
    this.isCommentModalOpen = true;
    // @ts-ignore
    $('#commentModal').modal('show');
  }

  closeModal() {
    // @ts-ignore
    $('#commentModal').modal('show');
    this.isCommentModalOpen = false;
  }

  getPhotos() {
    this.authService.ServerGet(server.photos + '/?albumId=' + this.album.id + '&_limit=' + this.requestPayload.limit)
      .subscribe((res) => {
        this.photos = res;
      }, err => {
        if (err.status >= 400 || err.status < 500) {
          this.notification.error(err.error);
          this.spinner.hide();
        }
      }, () => {
        this.spinner.hide();
      });
  }

  getComments(albumId) {
    this.comments = [];
    this.authService.ServerGet(server.comments + '/?postId=' + albumId + '&_limit=' + this.requestPayload.limit)
      .subscribe((res) => {
        this.comments = res;
      }, err => {
        if (err.status >= 400 || err.status < 500) {
          this.notification.error(err.error);
          this.spinner.hide();
        }
      }, () => {
        this.openModal();
        this.spinner.hide();
      });
  }

}
