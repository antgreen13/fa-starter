import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { RACES, CLASSES } from '../data/mock-characters';
import { Character, Class, Race } from '../data/data-types';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppCacheService } from '../app-cache.service';
import { ApiService } from '../api.service';

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
  character = new Character();
  userEmail: string;

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appCache: AppCacheService,
    private apiService: ApiService
  ) {}

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
    this.character.name = this.characterName;
    this.character.race = this.selectedRace.name;
    this.character.class = this.selectedClass.name;

    this.character.attributes.str = this.str[0];
    this.character.attributes.dex = this.dex[0];
    this.character.attributes.con = this.con[0];
    this.character.attributes.int = this.int[0];
    this.character.attributes.wis = this.wis[0];
    this.character.attributes.cha = this.cha[0];

    this.character.userEmail = this.appCache.authorizedUser
      ? this.appCache.authorizedUser.email
      : '';

    this.apiService.saveCharacter(this.character).subscribe((result) => {
      this.character = result;
      this.router.navigate(['/home']);
    });
  }
}
