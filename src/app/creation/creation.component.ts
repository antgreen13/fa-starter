import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { RACES, CLASSES } from '../data/mock-characters';
import { Class, Race } from '../data/data-types';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  characterName: string;
  selectedRace: Race;
  selectedClass: Class;
  raceDescription: string;
  classDescription: string;

  characterForm = new FormGroup({
    characterName: new FormControl(),
    characterRace: new FormControl(),
    characterClass: new FormControl(),
  });

  raceData = RACES;
  classData = CLASSES;
  attributeScores = [15, 14, 13, 12, 10, 8];

  //attributes
  str = [];
  dex = [];
  con = [];
  wis = [];
  int = [];
  cha = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  public drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public saveCharacter() {
    //TODO: actually save
    this.router.navigate(['/home']);
  }
}
