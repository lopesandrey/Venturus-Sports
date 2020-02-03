import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece, faTrophy, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { BannerInfo } from 'src/app/core/models';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public sportInfos: Array<BannerInfo> = [
    {icon: faPuzzlePiece, description: 'Sport type', info: 'Cycling'},
    {icon: faTrophy, description: 'Mode', info: 'Advanced'},
    {icon: faMapSigns, description: 'Route', info: '30 miles'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
