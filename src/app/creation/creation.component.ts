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
import { AttributeDialog } from '../components/attribute-dialog/attribute-dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  characterName: string;
  selectedRace?: Race;
  selectedClass?: Class;
  raceDescription: string;
  classDescription: string;
  character = new Character();
  userEmail: string;

  raceData = RACES;
  classData = CLASSES;
  attributeScores = [15, 14, 13, 12, 10, 8];

  //attributes
  str: number[] = [];
  dex: number[] = [];
  con: number[] = [];
  wis: number[] = [];
  int: number[] = [];
  cha: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appCache: AppCacheService,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.appCache.authorizedUser) {
      this.userEmail = this.appCache.authorizedUser.email;
    } else {
      this.router.navigate(['/home']);
    }
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.getCharacter(name);
    }
  }

  private getCharacter(name): void {
    this.apiService
      .getCharacters(this.userEmail, name)
      .subscribe((character: Character) => {
        this.characterName = character.name;
        this.selectedRace = this.raceData.find(
          (race) => (race.name = character.race)
        );
        this.selectedClass = this.classData.find(
          (characterClass) => (characterClass.name = character.class)
        );
        this.attributeScores = [];

        this.str.push(character.attributes.str);
        this.dex.push(character.attributes.dex);
        this.con.push(character.attributes.con);
        this.int.push(character.attributes.int);
        this.wis.push(character.attributes.wis);
        this.cha.push(character.attributes.cha);
      });
  }

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
    this.character.name = this.characterName || '';
    this.character.race = this.selectedRace ? this.selectedRace.name : '';
    this.character.class = this.selectedClass ? this.selectedClass.name : '';

    this.character.attributes.str = this.str[0];
    this.character.attributes.dex = this.dex[0];
    this.character.attributes.con = this.con[0];
    this.character.attributes.int = this.int[0];
    this.character.attributes.wis = this.wis[0];
    this.character.attributes.cha = this.cha[0];

    this.character.userEmail = this.userEmail;

    this.apiService.saveCharacter(this.character).subscribe((result) => {
      this.character = result;
      this.router.navigate(['/home']);
    });
  }

  public openAttributeDialog(attribute: string) {
    this.dialog.open(AttributeDialog, {data: {attribute: attribute}});
  }
}
