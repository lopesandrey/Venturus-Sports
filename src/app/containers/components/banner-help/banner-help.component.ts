import { Component, OnInit } from '@angular/core';
import {
  faHeartbeat,
  faSmile,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-banner-help',
  templateUrl: './banner-help.component.html',
  styleUrls: ['./banner-help.component.scss']
})
export class BannerHelpComponent implements OnInit {
  public faHeartbeat = faHeartbeat;
  public faSmile = faSmile;
  public faLifeRing = faLifeRing;

  constructor() { }

  ngOnInit() {
  }

}
