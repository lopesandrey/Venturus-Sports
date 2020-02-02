import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BreadcrumbService, UserSportsService } from 'src/app/core/services';
import { ActivatedRoute } from '@angular/router';
import { breadcrumb } from './breadcrumb';
import { Album } from 'src/app/core/models';
import {
  faListAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, AfterViewInit {

  public albums: Array<Album> = new Array<Album>();
  public faListAlt = faListAlt;
  public loading = false;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private route: ActivatedRoute,
    private userService: UserSportsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getAlbums(params.id);
    });
  }

  public ngAfterViewInit(): void {
    this.breadcrumbService.set(breadcrumb);
  }

  public getAlbums(id: number) {
    this.loading = true;
    this.userService.getAlbumsByUser(id).subscribe(res => {
      this.albums = res;
      this.loading = false;
    });
  }
}
