export class Race {
  id: number;
  name: string;
  description: string;

  constructor() {}
}

export class Class {
  id: number;
  name: string;
  description: string;

  constructor() {}
}

export class Attributes {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;

  constructor() {}
}

export class Character {
  name: string;
  race: string;
  class: string;
  userEmail?: string;
  attributes = new Attributes();

  constructor() {}
}

export class ApiData {
  index: string;
  name: string;
  url: string;

  constructor() {}
}