// Probably a lot of text here, and some API queries and generation code eventually, doing it manually would take way too fucking long.
const challenges = {
  // Add toggles for can/cannot use instead of writing both out, saves time/space.
  // Think about the "minimum set" of course
  combat: ['melee', 'ranged', 'magic'],
  areas: [
    'Burthorpe',
    'Burthorpe Games Room',
    'Death Plateau',
    "Rogues' Den",
    "Warriors' Guild",
    'Entrana',
    'Falador',
    'Crafting Guild',
    'Dwarven Mine',
    'Mining Guild',
    'Motherlode Mine',
    'Goblin Village',
    'Port Sarim',
    'Asgarnian Ice Dungeon',
    'Rimmington',
    'Taverley',
    "Heroes' Guild",
    'Taverley Dungeon',
    'White Wolf Mountain',
    'Iceberg',
    'Jatizso',
    'Keldagrim',
    'Blast Furnace',
    'Lighthouse',
    'Lunar Isle',
    'Miscellania',
    'Etceteria',
    'Neitiznot',
    'Rellekka',
    'Fremennik Slayer Dungeon',
    'Waterbirth Island',
    'Waterbirth Island Dungeon',
    'Ardougne',
    'East Ardougne',
    'West Ardougne',
    'Underground Pass',
    'Barbarian Outpost',
    'Baxtorian Falls',
    'Ancient Cavern',
    "Otto's Grotto",
    'Waterfall Dungeon',
    'Camelot',
    'Catherby',
    'Hemenster',
    'Fishing Guild',
    'Ranging Guild',
    'Piscatoris',
    "Eagles' Peak",
    'Port Khazard',
    "Seers' Village",
    'Tree Gnome Stronghold',
    'Gnome Stronghold Agility Course',
    'Grand Tree',
    'Crash Site Cavern',
    'Stronghold Slayer Cave',
    'Witchaven',
    'Yanille',
    'Yanille Agility dungeon',
    'Brimhaven',
    'Brimhaven Agility Arena',
    'Brimhaven Dungeon',
    'Crandor',
    'Karamja Volcano',
    'Crandor and Karamja Dungeon',
    'Mor Ul Rek',
    'Kharazi Jungle',
    'Shilo Village',
    'Shilo Village mine',
    'Tai Bwo Wannai',
    'Hardwood Grove',
    'Al Kharid',
    'Duel Arena',
    'Mage Training Arena',
    'Bandit Camp',
    'Bandit Camp Quarry',
    'Bedabin Camp',
    'Desert Mining Camp',
    'Kalphite Lair',
    'Nardah',
    'Pollnivneach',
    'Smoke Dungeon',
    'Pyramid',
    'Shantay Pass',
    'Kalphite Cave',
    'Sophanem',
    'Pyramid Plunder',
    'Sophanem Dungeon',
    'Uzer',
    'Barbarian Village',
    'Stronghold of Security',
    'Digsite',
    'Dorgesh-Kaan',
    'Draynor Village',
    'Draynor Manor',
    'Edgeville',
    'Edgeville Dungeon',
    'Edgeville Monastery',
    'Asgarnia',
    'Lumbridge',
    'Lumbridge Swamp',
    'Silvarea',
    'Paterdomus',
    'Varrock',
    "Champions' Guild",
    "Cooks' Guild",
    'Edgeville Dungeon',
    'hill giants',
    'brass key',
    'Grand Exchange',
    'Varrock Sewers',
    "Wizards' Tower",
    'Burgh de Rott',
    'Canifis',
    'Canifis Slayer Tower',
    'Mort Myre Swamp',
    'Nature Grotto',
    'Hollows',
    'Darkmeyer',
    'Meiyerditch',
    'Ver Sinhaza',
    'Theatre of Blood',
    "Mort'ton",
    'Barrows',
    'Port Phasmatys',
    'Ectofunctus',
    'Haunted Woods',
    'Arandar',
    'Elf Camp',
    'Lletya',
    'Prifddinas',
    'Tyras Camp',
    'Zul-Andra',
    'Abyss',
    'Edgeville Wilderness Dungeon',
    'Bandit Camp',
    'Chaos Temple',
    "Dark Warriors' Fortress",
    'Bone Yard',
    'Corporeal Beast Lair',
    'Forgotten Cemetery',
    'Graveyard of Shadows',
    'Wilderness God Wars Dungeon',
    'Revenant Caves',
    'Hobgoblin Mine',
    'Revenant Caves',
    'Demonic Ruins',
    'King Black Dragon Lair',
    'Lava Maze',
    'Lava Maze Dungeon',
    'Lava Dragon Isle',
    'Rune Mine',
    'Wilderness',
    'Deserted Keep',
    'Fountain of Rune',
    'Frozen Waste Plateau',
    'Mage Arena',
    'Resource Area',
    "Rogues' Castle",
    'Scorpion Pit',
    'Wilderness Agility Course',
    'Arceuus House',
    'Arceuus essence mine',
    'Dark Altar',
    'Catacombs of Kourend',
    'Hosidius House',
    'Tithe Farm',
    'Woodcutting Guild',
    'Lovakengj House',
    'Blast Mine',
    'Mount Quidamortem',
    'Chambers of Xeric',
    'Piscarilius House',
    'Shayzien House',
    'Chasm of Fire',
    'Lizardman Canyon',
    'Lizardman Settlement',
    'Lizardman Caves',
    'Wintertodt Camp',
    'Wintertodt',
    'Ape Atoll',
    'Ape Atoll Dungeon',
    'Marim',
    'Feldip Hills',
    'Corsair Cove',
    'Corsair Cove Dungeon',
    'Corsair Cove Resource Area',
    "Gu'Tanoth",
    'Jiggig',
    "Myths' Guild",
    'Troll Country',
    'God Wars Dungeon',
    'Trollheim',
    'Troll Stronghold',
    'Weiss',
    "Void Knights' Outpost",
    'Fossil Island',
    'House on the Hill',
    'Museum Camp',
    'Underwater',
    'Volcanic Mine',
    'Wyvern Cave',
    'Harmony Island',
    'Lithkren',
    'Lithkren Vault',
    "Mos Le'Harmless",
    "Mos Le'Harmless Caves",
    'Ungael',
    'Zanaris',
    'Puro-Puro'
  ],
  skills: [
    'Attack',
    'Strength',
    'Defence',
    'Ranged',
    'Prayer',
    'Magic',
    'Runecraft',
    'Hitpoints',
    'Crafting',
    'Mining',
    'Smithing',
    'Fishing',
    'Cooking',
    'Firemaking',
    'Woodcutting',
    'Agility',
    'Herblore',
    'Thieving',
    'Fletching',
    'Slayer',
    'Farming',
    'Construction',
    'Hunter'],
  minigames: [
    'Barbarian Assault',
    'Blast Furnace',
    'Burthorpe Games Room',
    'Castle Wars',
    'Fishing Trawler',
    'Nightmare Zone',
    'Pest Control',
    "Shades of Mort'ton",
    'Trouble Brewing',
    'Volcanic Mine',
    'Barrows',
    'Blast mine',
    'Brimhaven Agility Arena',
    "Champions' Challenge",
    'Gnome Ball',
    'Gnome Restaurant',
    'Impetuous Impulses',
    'Inferno',
    'Mage Arena',
    'Mage Training Arena',
    'Pyramid Plunder',
    'Ranging Guild Activities',
    'Rat Pits',
    'Rogue Trader',
    "Rogues' Den",
    "Sorceress's Garden",
    'Tai Bwo Wannai Cleanup',
    'Tears of Guthix',
    'Temple Trekking',
    'Tithe Farm',
    'Treasure Trails',
    'TzHaar Fight Cave',
    'Bounty Hunter',
    'Castle Wars',
    'Clan Wars',
    'Duel Arena',
    'Last Man Standing',
    'TzHaar Fight Pit'
  ],
  quests: [
    'Animal Magnetism',
    'Another Slice of H.A.M.',
    'Between a Rock...',
    'Big Chompy Bird Hunting',
    'Biohazard',
    'Bone Voyage',
    'Cabin Fever',
    'Client of Kourend',
    'Clock Tower',
    'Cold War',
    'Contact!',
    'Creature of Fenkenstrain',
    'Darkness of Hallowvale',
    'Death Plateau',
    'Death to the Dorgeshuun',
    'The Depths of Despair',
    'Desert Treasure',
    'Devious Minds',
    'The Dig Site',
    'Dragon Slayer II',
    'Dream Mentor',
    'Druidic Ritual',
    'Dwarf Cannon',
    "Eadgar's Ruse",
    "Eagles' Peak",
    'Elemental Workshop I',
    'Elemental Workshop II',
    "Enakhra's Lament",
    'Enlightened Journey',
    'The Eyes of Glouphrie',
    'Fairytale I - Growing Pains',
    'Fairytale II - Cure a Queen',
    'Family Crest',
    'The Feud',
    'Fight Arena',
    'Fishing Contest',
    'Forgettable Tale...',
    'The Fremennik Isles',
    'The Fremennik Trials',
    'Garden of Tranquillity',
    "Gertrude's Cat",
    'Ghosts Ahoy',
    'The Giant Dwarf',
    'The Golem',
    'The Grand Tree',
    'The Great Brain Robbery',
    'Grim Tales',
    'The Hand in the Sand',
    'Haunted Mine',
    'Hazeel Cult',
    "Heroes' Quest",
    'Holy Grail',
    'Horror from the Deep',
    "Icthlarin's Little Helper",
    'In Aid of the Myreque',
    'In Search of the Myreque',
    'Jungle Potion',
    "King's Ransom",
    "Legends' Quest",
    'Lost City',
    'The Lost Tribe',
    'Lunar Diplomacy',
    'Making Friends with My Arm',
    'Making History',
    "Merlin's Crystal",
    "Monk's Friend",
    'Monkey Madness I',
    'Monkey Madness II',
    'Mountain Daughter',
    "Mourning's Ends Part I",
    "Mourning's Ends Part II",
    'Murder Mystery',
    "My Arm's Big Adventure",
    'Nature Spirit',
    'Observatory Quest',
    "Olaf's Quest",
    'Agility',
    'One Small Favour',
    'Plague City',
    'Priest in Peril',
    'The Queen of Thieves',
    'Rag and Bone Man',
    'Rag and Bone Man II',
    'Ratcatchers',
    'Recipe for Disaster',
    "Recipe for Disaster/Another Cook's Quest",
    'Recipe for Disaster/Defeating the Culinaromancer',
    'Recipe for Disaster/Freeing Evil Dave',
    'Recipe for Disaster/Freeing King Awowogei',
    'Recipe for Disaster/Freeing Pirate Pete',
    'Recipe for Disaster/Freeing Sir Amik Varze',
    'Recipe for Disaster/Freeing Skrach Uglogwee',
    'Recipe for Disaster/Freeing the Goblin generals',
    'Recipe for Disaster/Freeing the Lumbridge Guide',
    'Recipe for Disaster/Freeing the Mountain Dwarf',
    'Recipe for Disaster/Full guide',
    'Recruitment Drive',
    'Regicide',
    'Roving Elves',
    'Royal Trouble',
    'Rum Deal',
    'Scorpion Catcher',
    'Sea Slug',
    "Shades of Mort'ton",
    'Shadow of the Storm',
    'Sheep Herder',
    'Shilo Village',
    'The Slug Menace',
    "A Soul's Bane",
    'Spirits of the Elid',
    'Swan Song',
    'Tai Bwo Wannai Trio',
    'A Tail of Two Cats',
    'Tale of the Righteous',
    'A Taste of Hope',
    'Tears of Guthix (quest)',
    'Temple of Ikov',
    'Throne of Miscellania',
    'The Tourist Trap',
    'Tower of Life',
    'Tree Gnome Village',
    'Tribal Totem',
    'Troll Romance',
    'Troll Stronghold',
    'Underground Pass',
    'Wanted!',
    'Watchtower',
    'Waterfall Quest',
    'What Lies Below',
    "Witch's House",
    'Zogre Flesh Eaters',
    "Black Knights' Fortress",
    "Cook's Assistant",
    'The Corsair Curse',
    'Demon Slayer',
    "Doric's Quest",
    'Dragon Slayer',
    'Ernest the Chicken',
    'Goblin Diplomacy',
    'Imp Catcher',
    "The Knight's Sword",
    'Misthalin Mystery',
    "Pirate's Treasure",
    'Prince Ali Rescue',
    'The Restless Ghost',
    'Romeo &amp; Juliet',
    'Rune Mysteries',
    'Sheep Shearer',
    'Shield of Arrav',
    'Vampire Slayer',
    "Witch's Potion"
  ],
  items:[],
  beasts:[],
  mapTiles:[],
  type:['ironman','hardcore ironman','ultimate ironman'],
  slots:[]
}

export default challenges
