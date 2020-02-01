import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faSearch,
 } from '@fortawesome/free-solid-svg-icons';
import { UserSportsService } from 'src/app/core/services/user-sports.service';
import { MatTableDataSource } from '@angular/material/table';
import { User, PhotoModel, PostsModel } from 'src/app/core/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public faCoffee = faCoffee;
  public faSearch = faSearch;

  public users: Array<User>;
  public photos: Array<PhotoModel>;
  public posts: Array<PostsModel>;

  public displayedColumns: string[] = ['username', 'name', 'email', 'city', 'rideInGroup' , 'daysOfWeek', 'albums', 'posts', 'photos'];
  public dataSource: MatTableDataSource<User> = new MatTableDataSource();
  public form: FormGroup;

  constructor(
    private userService: UserSportsService,
  ) { }

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
    this.userService.getTableData().subscribe((res: Array<User>) => {
      this.users = res;
      this.dataSource.data = this.users;
      console.log(this.users)
    });
  }

  public async getByName(name: string): Promise<void> {
    name = name.toLocaleLowerCase();
    const user = this.users.filter(u => u.name.toLocaleLowerCase().indexOf(name) >= 0);
    this.dataSource.data = user;
  }


  public clearFilter(): void {
    this.getTableData();
    this.form.get('name').setValue('');
  }

}
