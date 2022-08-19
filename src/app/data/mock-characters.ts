import { Character, Race, Class } from "./data-types";

export const CHARACTERS: Character[] = [
    { name: 'Godrick', race: 'Human', class: 'Fighter'},
    { name: 'Crom', race: 'Dwarf', class: 'Wizard'},
    { name: 'Trevor', race: 'Gnome', class: 'Rogue'}
]

export const RACES: Race[] = [
    { id: 1, name: 'Elf'},
    { id: 2, name: 'Dragonborn'},
    { id: 3, name: 'Dwarf'},
    { id: 4, name: 'Gnome'},
    { id: 5, name: 'Half-Elf'},
    { id: 6, name: 'Half-Orc'},
    { id: 7, name: 'Halfling'},
    { id: 8, name: 'Human'},
    { id: 9, name: 'Tiefling'},
]

export const CLASSES: Class[] = [
    { id: 1, name: 'Barbarian'},
    { id: 2, name: 'Bard'},
    { id: 3, name: 'Cleric'},
    { id: 4, name: 'Druid'},
    { id: 5, name: 'Fighter'},
    { id: 6, name: 'Monk'},
    { id: 7, name: 'Paladin'},
    { id: 8, name: 'Ranger'},
    { id: 9, name: 'Rogue'},
    { id: 10, name: 'Sorcerer'},
    { id: 11, name: 'Warlock'},
    { id: 12, name: 'Wizard'},
]