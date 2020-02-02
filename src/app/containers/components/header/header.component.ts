import { Component, OnInit } from '@angular/core';
import { faChevronDown, faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { DropdownMenu } from 'src/app/core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faChevronDown = faChevronDown;
  faBasketballBall = faBasketballBall;

  public dropdowns: Array<DropdownMenu> =
    [
      {
        title: 'Friends List',
      },
      {
        title: 'Saved Items',
      },
      {
        title: 'User Preferences',
      },
      {
        title: 'Log out',
        isLast: true,
      },
    ];

  constructor() { }

  ngOnInit() {
  }

}
