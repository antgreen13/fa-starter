import { Race, Class } from './data-types';

export const RACES: Race[] = [
  {
    id: 1,
    name: 'Dragonborn',
    description: `The dragonborn walk proudly through a world that greets them with fearful incomprehension. 
    Shaped by the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, 
    combining the best attributes of dragons and humanoids.`,
  },
  {
    id: 2,
    name: 'Dwarf',
    description: `Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, 
    the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, 
    and a burning hatred of goblins and orcs – these common threads unite all dwarves.`,
  },
  {
    id: 3,
    name: 'Elf',
    description: `Elves are a magical people of otherworldly grace, living in places of ethereal beauty, 
    in the midst of ancient forests or in silvery spires glittering with faerie light,
    where soft music drifts through the air and gentle fragrances waft on the breeze.
    Elves love nature and magic, art and artistry, music and poetry.`,
  },
  {
    id: 4,
    name: 'Gnome',
    description: `A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities.
    Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, 
    a yelp of surprise or triumph, and especially bursts of laughter. 
    Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.`,
  },
  {
    id: 5,
    name: 'Half-Elf',
    description: `Walking in two worlds but truly belonging to neither, 
    half-elves combine what some say are the best qualities of their elf and human parents: 
    human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.`,
  },
  {
    id: 6,
    name: 'Half-Orc',
    description: `When alliances between humans and orcs are sealed by marriages, half-orcs are born. 
    Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. 
    Some venture into the world to prove their worth among humans and other more civilized races. 
    Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.`,
  },
  {
    id: 7,
    name: 'Halfling',
    description: `The comforts of home are the goals of most halflings' lives: 
    a place to settle in peace and quiet, far from marauding monsters and clashing armies. 
    Others form nomadic bands that travel constantly, lured by the open road and the wide horizon 
    to discover the wonders of new lands and peoples. Halflings work readily with others, and they are loyal to their friends, 
    whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.`,
  },
  {
    id: 8,
    name: 'Human',
    description: `In the reckonings of most worlds, humans are the youngest of the common races, 
    late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. 
    Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. 
    Or maybe they feel they have something to prove to the elder races, and that's why they build 
    their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, 
    the achievers, and the pioneers of the worlds.`,
  },
  {
    id: 9,
    name: 'Tiefling',
    description: `To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: 
    this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago 
    infused the essence of Asmodeus, overlord of the Nine Hells (and many of the other powerful devils serving under him) into 
    their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and 
    their children and their children's children will always be held accountable.`,
  },
];

export const CLASSES: Class[] = [
  {
    id: 1,
    name: 'Barbarian',
    description: `For some, their rage springs from a communion with fierce animal spirits. 
    Others draw from a roiling reservoir of anger at a world full of pain. 
    For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.`,
  },
  {
    id: 2,
    name: 'Bard',
    description: `Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, 
    demoralize foes, manipulate minds, create illusions, and even heal wounds. 
    The bard is a master of song, speech, and the magic they contain.`,
  },
  {
    id: 3,
    name: 'Cleric',
    description: `Clerics are intermediaries between the mortal world and the distant planes of the gods. 
    As varied as the gods they serve, clerics strive to embody the handiwork of their deities. 
    No ordinary priest, a cleric is imbued with divine magic.`,
  },
  {
    id: 4,
    name: 'Druid',
    description: `Whether calling on the elemental forces of nature or emulating the creatures of the animal world, 
    druids are an embodiment of nature's resilience, cunning, and fury. 
    They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.`,
  },
  {
    id: 5,
    name: 'Fighter',
    description: `Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. 
    They are well acquainted with death, both meting it out and staring it defiantly in the face.`,
  },
  {
    id: 6,
    name: 'Monk',
    description: `Monks are united in their ability to magically harness the energy that flows in their bodies. 
    Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, 
    this energy infuses all that a monk does.`,
  },
  {
    id: 7,
    name: 'Paladin',
    description: `Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, 
    or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.`,
  },
  {
    id: 8,
    name: 'Ranger',
    description: `Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, 
    amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.`,
  },
  {
    id: 9,
    name: 'Rogue',
    description: `Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. 
    They have a knack for finding the solution to just about any problem, 
    demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.`,
  },
  {
    id: 10,
    name: 'Sorcerer',
    description: `Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, 
    some otherworldly influence, or exposure to unknown cosmic forces. 
    No one chooses sorcery; the power chooses the sorcerer.`,
  },
  {
    id: 11,
    name: 'Warlock',
    description: `Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. 
    Through pacts made with mysterious beings of supernatural power, 
    warlocks unlock magical effects both subtle and spectacular.`,
  },
  {
    id: 12,
    name: 'Wizard',
    description: `Wizards are supreme magic-users, defined and united as a class by the spells they cast. 
    Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, 
    arcing lightning, subtle deception, brute-force mind control, and much more.`,
  },
];
