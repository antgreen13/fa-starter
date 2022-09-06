import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'popup-dialog',
  templateUrl: 'popup-dialog.html',
})
export class PopupDialog implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { type: string, data: string },
    private apiService: ApiService
  ) {}

  public title: string;
  public description: string;

  ngOnInit(): void {
    switch(this.data.type) {
      case 'attribute': {
        this.apiService.getAttribute(this.data.data).subscribe((result) => {
          this.title = result.full_name;
          this.description = result.desc.join(' ');
        });
        break;
      }
      case 'trait': {
        this.apiService.getTrait(this.data.data).subscribe((result) => {
          this.title = result.name;
          this.description = result.desc.join(' ');
        });
        break;
      }
    }
    


  }
}
