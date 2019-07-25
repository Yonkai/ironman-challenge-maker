// Probably a lot of text here, and some API queries and generation code eventually, doing it manually would take way too fucking long.
const challenges = {
  // Add toggles for can/cannot use instead of writing both out, saves time/space.
  // Think about the "minimum set" of course
  combat: ['melee', 'ranged', 'magic'],
  areas: [
    "Burthorpe
    "Burthorpe Games Room",
    "Death Plateau",
    "Rogues Den",
    "Warriors Guild",
    "Entrana",
    "Falador Crafting Guild",
    "Dwarven Mine"
    "Mining",
    "GuildMotherlode",
    "MineGoblin",
    "VillagePort",
    "SarimAsgarnian",
    "Ice",
    "DungeonRimmingtonTaverleyHeroes'",
    "GuildTaverley",
    "DungeonWhite",
    "Wolf",
    "MountainIcebergJatizsoKeldagrimBlast",
    "FurnaceLighthouseLunar",
    "IsleMiscellaniaEtceteriaNeitiznotRellekkaFremennik",
    "Slayer",
    "DungeonWaterbirth",
    "IslandWaterbirth",
    "Island",
    "DungeonArdougneEast",
    "ArdougneWest",
    "ArdougneUnderground",
    "PassBarbarian",
    "OutpostBaxtorian",
    "FallsAncient",
    "CavernOtto's",
    "GrottoWaterfall",
    "DungeonCamelotCatherbyHemensterFishing",
    "GuildRanging",
    "GuildPiscatorisEagles'",
    "PeakPort",
    "KhazardSeers'",
    "VillageTree",
    "Gnome",
    "StrongholdGnome",
    "Stronghold",
    "Agility",
    "CourseGrand",
    "TreeCrash",
    "Site",
    "CavernStronghold",
    "Slayer",
    "CaveWitchavenYanilleYanille",
    "Agility",
    "dungeonBrimhavenBrimhaven",
    "Agility",
    "ArenaBrimhaven",
    "DungeonCrandorKaramja",
    "VolcanoCrandor",
    "and",
    "Karamja",
    "DungeonMor",
    "Ul",
    "RekKharazi",
    "JungleShilo",
    "VillageShilo",
    "Village",
    "mineTai",
    "Bwo",
    "WannaiHardwood",
    "GroveAl",
    "KharidDuel",
    "ArenaMage",
    "Training",
    "ArenaBandit",
    "CampBandit",
    "Camp",
    "QuarryBedabin",
    "CampDesert",
    "Mining",
    "CampKalphite",
    "LairNardahPollnivneachSmoke",
    "DungeonPyramidShantay",
    "PassKalphite",
    "CaveSophanemPyramid",
    "PlunderSophanem",
    "DungeonUzerBarbarian",
    "VillageStronghold",
    "of",
    "SecurityDigsiteDorgesh-KaanDraynor",
    "VillageDraynor",
    "ManorEdgevilleEdgeville",
    "DungeonEdgeville",
    "MonasteryAsgarniaLumbridgeLumbridge",
    "SwampSilvareaPaterdomusVarrockChampions'",
    "GuildCooks'",
    "GuildEdgeville",
    "Dungeonhill",
    "giantsbrass",
    "keyGrand",
    "ExchangeVarrock",
    "SewersWizards'",
    "TowerBurgh",
    "de",
    "RottCanifisCanifis",
    "Slayer",
    "TowerMort",
    "Myre",
    "SwampNature",
    "GrottoHollowsDarkmeyerMeiyerditchVer",
    "SinhazaTheatre",
    "of",
    "BloodMort'tonBarrowsPort",
    "PhasmatysEctofunctusHaunted",
    "WoodsArandarElf",
    "CampLletyaPrifddinasTyras",
    "CampZul-AndraAbyssEdgeville",
    "Wilderness",
    "DungeonBandit",
    "CampChaos",
    "TempleDark",
    "Warriors'",
    "FortressBone",
    "YardCorporeal",
    "Beast",
    "LairForgotten",
    "CemeteryGraveyard",
    "of",
    "ShadowsWilderness",
    "God",
    "Wars",
    "DungeonRevenant",
    "CavesHobgoblin",
    "MineRevenant",
    "CavesDemonic",
    "RuinsKing",
    "Black",
    "Dragon",
    "LairLava",
    "MazeLava",
    "Maze",
    "DungeonLava",
    "Dragon",
    "IsleRune",
    "MineWildernessDeserted",
    "KeepFountain",
    "of",
    "RuneFrozen",
    "Waste",
    "PlateauMage",
    "ArenaResource",
    "AreaRogues'",
    "CastleScorpion",
    "PitWilderness",
    "Agility",
    "CourseArceuus",
    "HouseArceuus",
    "essence",
    "mineDark",
    "AltarCatacombs",
    "of",
    "KourendHosidius",
    "HouseTithe",
    "FarmWoodcutting",
    "GuildLovakengj",
    "HouseBlast",
    "MineMount",
    "QuidamortemChambers",
    "of",
    "XericPiscarilius",
    "HouseShayzien",
    "HouseChasm",
    "of",
    "FireLizardman",
    "CanyonLizardman",
    "SettlementLizardman",
    "CavesWintertodt",
    "CampWintertodtApe",
    "AtollApe",
    "Atoll",
    "DungeonMarimFeldip",
    "HillsCorsair",
    "CoveCorsair",
    "Cove",
    "DungeonCorsair",
    "Cove",
    "Resource",
    "AreaGu'TanothJiggigMyths'",
    "GuildTroll",
    "CountryGod",
    "Wars",
    "DungeonTrollheimTroll",
    "StrongholdWeissVoid",
    "Knights'",
    "OutpostFossil",
    "IslandHouse",
    "on",
    "the",
    "HillMuseum",
    "CampUnderwaterVolcanic",
    "MineWyvern",
    "CaveHarmony",
    "IslandLithkrenLithkren",
    "VaultMos",
    "Le'HarmlessMos",
    "Le'Harmless",
    "CavesUngaelZanarisPuro-Puro"
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
    'Hunter']
}

export default challenges
