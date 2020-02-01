import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/core/services';
import { Link } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumb: Array<Link>;

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) {
    breadcrumbService.get().subscribe(res => {
      this.breadcrumb = res;
    });
  }

  ngOnInit() {
  }

}
