import {Component, OnInit} from '@angular/core';
import {Items} from '../../shared/appItems';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appLogo = Items.appLogo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
