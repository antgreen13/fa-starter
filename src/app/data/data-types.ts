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

export interface Character {
  name: string;
  race: string;
  class: string;
  userEmail?: string;
  attributes?: number[];
}
