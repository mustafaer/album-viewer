import {Component, OnInit} from '@angular/core';
import {server} from '../../services/server';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../../services/auth/auth.service';
import {RequestPayload} from '../../shared/requestPayload.model';
import {NotificationService} from '../../services/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  albums: any;
  requestPayload: RequestPayload;

  constructor(private spinner: NgxSpinnerService,
              private authService: AuthService,
              private notification: NotificationService) {
    this.requestPayload = new RequestPayload();
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.authService.ServerGet(server.albums + '?_limit=' + this.requestPayload.limit)
      .subscribe((res) => {
        this.albums = res;
      }, err => {
        if (err.status >= 400 || err.status < 500) {
          this.notification.error(err.error);
        }
      }, () => {
      });
  }

}
