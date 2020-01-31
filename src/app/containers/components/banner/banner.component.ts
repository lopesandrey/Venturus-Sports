import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece, faTrophy, faMapSigns, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public sportInfos: SportInfoItem[] = [
    {icon: faPuzzlePiece, description: 'Sport type', info: 'Cycling'},
    {icon: faTrophy, description: 'Mode', info: 'Advanced'},
    {icon: faMapSigns, description: 'Route', info: '30 miles'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

export interface SportInfoItem {
  icon: IconDefinition;
  description: string;
  info: string;
}
