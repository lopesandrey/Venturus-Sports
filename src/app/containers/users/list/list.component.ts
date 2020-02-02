import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  faCoffee,
  faSearch,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { UserSportsService } from 'src/app/core/services/user-sports.service';
import { MatTableDataSource } from '@angular/material/table';
import { User, PhotoModel, PostsModel } from 'src/app/core/models';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../components/modal/delete/delete.component';
import { TableService, BreadcrumbService } from 'src/app/core/services';
import { breadcrumb } from './breadcrumb';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  public faCoffee = faCoffee;
  public faSearch = faSearch;
  public faTrashAlt = faTrashAlt;
  public loading = false;

  public users: Array<User>;
  public photos: Array<PhotoModel>;
  public posts: Array<PostsModel>;

  public displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'city',
    'rideInGroup',
    'daysOfWeek',
    'albums',
    'posts',
    'photos',
    'delete',
  ];
  public dataSource: MatTableDataSource<User> = new MatTableDataSource();
  public form: FormGroup;

  constructor(
    private tableService: TableService,
    private breadcrumbService: BreadcrumbService,
    public dialog: MatDialog,
  ) { }

  public ngAfterViewInit(): void {
    this.breadcrumbService.set(breadcrumb);
  }

  public ngOnInit(): void {
    this.getTableData();

    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  public onSubmit(): void {
    const name: string = this.form.get('name').value;
    this.getByName(name);
  }

  public getTableData() {
    this.loading = true;
    this.tableService.getData().subscribe((res: Array<User>) => {
      this.users = res;
      this.dataSource.data = this.users;
      this.loading = false;
    });
  }

  public async getByName(name: string): Promise<void> {
    name = name.toLocaleLowerCase();
    const user = this.users.filter(u => u.name.toLocaleLowerCase().indexOf(name) >= 0);
    this.dataSource.data = user;
  }

  public deleteUser(user: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: 'Delete user?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tableService.deleteUser(user);
      }
    });
  }

  public clearFilter(): void {
    this.getTableData();
    this.form.get('name').setValue('');
  }

}
