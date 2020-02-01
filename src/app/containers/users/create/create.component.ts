import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from 'src/app/core/services';
import { User } from 'src/app/core/models';
import { rideInGroupEnumeratorList } from 'src/app/core/enumerators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public form: FormGroup;
  public rideinGroupEnum: typeof rideInGroupEnumeratorList = rideInGroupEnumeratorList;

  constructor(
    private tableService: TableService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      city: new FormControl(''),
      rideInGroup: new FormControl('', Validators.required),
      sun: new FormControl(false, Validators.required),
      mon: new FormControl(false, Validators.required),
      tue: new FormControl(false, Validators.required),
      wed: new FormControl(false, Validators.required),
      thu: new FormControl(false, Validators.required),
      fri: new FormControl(false, Validators.required),
      sat: new FormControl(false, Validators.required),
    });
  }

  public onSubmit() {
    const form = this.form.value;
    const users = this.tableService.users.getValue();

    const user: User = {
      id: users.length + 1,
      username: form.name,
      name: form.name,
      email: form.email,
      address: {
        city: form.city,
      },
      albums: 0,
      posts: 0,
      photos: 0,
      rideInGroup: form.rideInGroup,
      daysOfWeek: {
        sun: form.sun,
        mon: form.mon,
        tue: form.tue,
        wed: form.wed,
        thu: form.thu,
        fri: form.fri,
        sat: form.sat,
      }
    };

    this.tableService.createUser(user);
  }

}
