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
        title: 'Registration',
        route: 'users/new'
      },
      {
        title: 'Friends List',
        route: 'users/new'
      },
      {
        title: 'Saved Items',
        route: 'users/new'
      },
      {
        title: 'User Preferences',
        route: 'users/new'
      },
      {
        title: 'Log out',
        route: 'users/new',
        isLast: true,
      },
    ];

  constructor() { }

  ngOnInit() {
  }

}
