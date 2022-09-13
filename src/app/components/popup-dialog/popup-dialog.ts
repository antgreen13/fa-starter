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
      case 'feature': {
        this.apiService.getFeature(this.data.data).subscribe((result) => {
          this.title = result.name;
          this.description = result.desc.join(' ');
        });
        break;
      }
      case 'classTip': {
        this.apiService.getClassStats(this.data.data).subscribe((results) =>{
          this.title = `You've selected ${this.data.data}`;
          var data : string[] = [];
          var keys = Object.keys(results)
          keys.forEach((key) => {
            data.push(key);
          })
          this.description = `Our data shows that the most common classes for  
                              ${this.data.data} are ${keys[0]}, ${keys[1]}, and ${keys[2]}. `
          
        })
        break;
      }
      case 'attributeTips': {
        var highest = '';
        var secondHighest = '';
        var value = 0;
        this.apiService.getAttributes(this.data.data).subscribe((results) => {
          this.title = `You've selected ${this.data.data}`;
          var keys = Object.keys(results)
          keys.forEach((key) => {
            if(results[key] > value) {
              secondHighest = highest;
              highest = key
              value = results[key]
            }
          })
          this.description = `Our data shows that the two highest stats for a ${this.data.data} are ${highest} and ${secondHighest}.`
        })
        break;
      }
    }
    
  }
}
