import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'attribute-dialog',
  templateUrl: 'attribute-dialog.html',
})
export class AttributeDialog implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { attribute: string },
    private apiService: ApiService
  ) {}

  public title: string;
  public attributeDescription: string;

  ngOnInit(): void {
    this.apiService.getAttribute(this.data.attribute).subscribe((result) => {
      this.title = result.full_name;
      this.attributeDescription = result.desc.join(' ');
    });
  }
}
