import { Component, OnInit } from '@angular/core';
import {
  faHeartbeat,
  faSmile,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';
import { BannerInfo } from 'src/app/core/models';
@Component({
  selector: 'app-banner-help',
  templateUrl: './banner-help.component.html',
  styleUrls: ['./banner-help.component.scss']
})
export class BannerHelpComponent implements OnInit {
  public faHeartbeat = faHeartbeat;
  public faSmile = faSmile;
  public faLifeRing = faLifeRing;

  public infos: Array<BannerInfo> = [
    {
      icon: faLifeRing,
      description: 'Need help?',
      info: `Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.`
    },
    {
      icon: faHeartbeat,
      description: 'Why register?',
      info: `Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.`
    },
    { icon: faSmile,
      description: 'What people are saying...',
      info: `Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
