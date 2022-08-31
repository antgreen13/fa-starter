export interface CharacterTest {
    name: string;
    race: string;
    class: string;
}

export interface Race {
    id: number;
    name: string;
    description: string;
}

export interface Class { 
    id: number;
    name: string;
    description: string;
}

export class Character {
    name: string;
    race: string;
    class: string;
    userEmail: string;
    attribues: number[] 
}