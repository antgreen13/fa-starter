import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { RACES, CLASSES } from '../data/mock-characters';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  characterName: string;
  selectedRace: string;
  selectedClass: string;
  raceDescription: string;
  classDescription: string;

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

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  displayRaceDescription(raceName: string) {
    switch (raceName){
      case 'Elf':
        this.raceDescription = 
        `Elves are a magical people of otherworldly grace, living in places of ethereal beauty, 
        in the midst of ancient forests or in silvery spires glittering with faerie light,
        where soft music drifts through the air and gentle fragrances waft on the breeze.
        Elves love nature and magic, art and artistry, music and poetry.`;
        break;

      case 'Dragonborn':
        this.raceDescription = 
        `The dragonborn walk proudly through a world that greets them with fearful incomprehension. 
        Shaped by the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, 
        combining the best attributes of dragons and humanoids.`;
        break;

      case 'Dwarf':
        this.raceDescription = 
        `Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, 
        the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, 
        and a burning hatred of goblins and orcs – these common threads unite all dwarves.`;
        break;

      case 'Gnome':
        this.raceDescription = 
        `A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities.
         Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, 
         a yelp of surprise or triumph, and especially bursts of laughter. 
         Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.`;
         break;

      case 'Half-Elf':
        this.raceDescription = 
        `Walking in two worlds but truly belonging to neither, 
        half-elves combine what some say are the best qualities of their elf and human parents: 
        human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.`;
        break;

      case 'Half-Orc':
        this.raceDescription = 
        `When alliances between humans and orcs are sealed by marriages, half-orcs are born. 
        Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. 
        Some venture into the world to prove their worth among humans and other more civilized races. 
        Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.`;
        break;
      case 'Halfling':
        this.raceDescription = 
        `The comforts of home are the goals of most halflings' lives: 
        a place to settle in peace and quiet, far from marauding monsters and clashing armies. 
        Others form nomadic bands that travel constantly, lured by the open road and the wide horizon 
        to discover the wonders of new lands and peoples. Halflings work readily with others, and they are loyal to their friends, 
        whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.`;
        break;

      case 'Human':
        this.raceDescription = 
        `In the reckonings of most worlds, humans are the youngest of the common races, 
        late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. 
        Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. 
        Or maybe they feel they have something to prove to the elder races, and that's why they build 
        their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, 
        the achievers, and the pioneers of the worlds.`;
        break;

      case 'Tiefling':
        this.raceDescription = 
        `To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: 
        this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago 
        infused the essence of Asmodeus, overlord of the Nine Hells (and many of the other powerful devils serving under him) into 
        their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and 
        their children and their children's children will always be held accountable.`;
        break;
    }

  }

  displayClassDescription(className: string) {
    switch (className){
      case 'Barbarian':
        this.classDescription = 
        `For some, their rage springs from a communion with fierce animal spirits. 
        Others draw from a roiling reservoir of anger at a world full of pain. 
        For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.`;
        break;

      case 'Bard':
        this.classDescription = 
        `Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, 
        demoralize foes, manipulate minds, create illusions, and even heal wounds. 
        The bard is a master of song, speech, and the magic they contain.`;
        break;

      case 'Cleric':
        this.classDescription = 
        `Clerics are intermediaries between the mortal world and the distant planes of the gods. 
        As varied as the gods they serve, clerics strive to embody the handiwork of their deities. 
        No ordinary priest, a cleric is imbued with divine magic.`;
        break;

      case 'Druid':
        this.classDescription = 
        `Whether calling on the elemental forces of nature or emulating the creatures of the animal world, 
        druids are an embodiment of nature's resilience, cunning, and fury. 
        They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.`
        break;

      case 'Fighter':
        this.classDescription = 
        `Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. 
        They are well acquainted with death, both meting it out and staring it defiantly in the face.`
        break;

      case 'Monk':
        this.classDescription = 
        `Monks are united in their ability to magically harness the energy that flows in their bodies. 
        Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, 
        this energy infuses all that a monk does.`
        break;

      case 'Paladin':
        this.classDescription =
        `Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, 
        or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.`;
        break;

      case 'Ranger':
        this.classDescription = 
        `Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, 
        amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.`;
        break;

      case 'Rogue':
        this.classDescription = 
        `Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. 
        They have a knack for finding the solution to just about any problem, 
        demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.`;
        break;

      case 'Sorcerer': 
        this.classDescription =
        `Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, 
        some otherworldly influence, or exposure to unknown cosmic forces. 
        No one chooses sorcery; the power chooses the sorcerer.`;
        break;

      case 'Warlock':
        this.classDescription = 
        `Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. 
        Through pacts made with mysterious beings of supernatural power, 
        warlocks unlock magical effects both subtle and spectacular.`;
        break;

      case 'Wizard':
        this.classDescription = 
        `Wizards are supreme magic-users, defined and united as a class by the spells they cast. 
        Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, 
        arcing lightning, subtle deception, brute-force mind control, and much more.`;
        break;
    }
  }

}
