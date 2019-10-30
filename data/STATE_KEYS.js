// stores keys on state from challenge/restrictions snowflake ironman forms
// only for storing KEYS, not data... Don't wanna do that lol
// Nested objects represent forms
const STATE_KEYS = {
  GOING_AREA: {
    GOING_AREA: 'GOING_AREA'
  },
  USING_AREA: {
    USING_AREA: 'USING_AREA'
  },
  IRONMAN_TYPE: 'IRONMAN_TYPE',
  CLIENT_TYPE: 'CLIENT_TYPE',
  ZOOM_TYPE: 'ZOOM_TYPE',
  COMPASS_RESTRICTION: 'COMPASS_RESTRICTION',
  BIOMES: 'BIOMES',
  SLOTS: 'SLOTS',
  COMBAT: 'COMBAT',
  SKILLS: {
    SKILLS: 'SKILLS'
  },
  MINIGAMES: {
    MINIGAMES: 'MINIGAMES'
  },
  QUESTS: {
    QUESTS: 'QUESTS'
  },
  SPELLS: {
    SPELLS: 'SPELLS'
  },
  ITEMS: {
    ITEMS: 'ITEMS'
  },
  BEASTS: {
    BEASTS: 'BEASTS'
  },
  POTIONS: {
    POTIONS: 'POTIONS'
  },
  COMPOSITE_KEY_HALFS: {
    _COUNT: '_COUNT',
    _CHALLENGE_INVENTORY: '_CHALLENGE_INVENTORY'
  },
  FOOD: 'FOOD'
}

export default STATE_KEYS
// Might make sense to add a useReducer() function to handle the amount of state orrr redux?
