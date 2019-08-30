// stores keys on state from challenge/restrictions snowflake ironman forms
// only for storing KEYS, not data... Don't wanna do that lol
// Nested objects represent forms
const STATE_KEYS = {
  AREA: {
    GOING_AREA: 'GOING_AREA',
    GOING_AREA_MOD: 'GOING_AREA_MOD',
    USING_AREA: 'USING_AREA',
    USING_AREA_MOD: 'USING_AREA_MOD',
    SEARCH_AREA: 'SEARCH_AREA',
    SEARCH_AREA_MOD: 'SEARCH_AREA_MOD'
  },
  IRONMAN_TYPE: 'IRONMAN_TYPE'
}

export default STATE_KEYS
// Might make sense to add a useReducer() function to handle the amount of state orrr redux?
