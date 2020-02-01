import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public faTrashAlt = faTrashAlt;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    ) {}

  ngOnInit() {
  }

  public confirm() {
    this.dialogRef.close(true);
  }

}
