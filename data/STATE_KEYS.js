// stores keys on state from challenge/restrictions snowflake ironman forms
// only for storing KEYS, not data... Don't wanna do that lol
// Nested objects represent forms
const STATE_KEYS = {
  AREA: {
    GOING_AREA: 'GOING_AREA',
    USING_AREA: 'USING_AREA',
    SEARCH_AREA: 'SEARCH_AREA'
  },
  IRONMAN_TYPE: 'IRONMAN_TYPE'
}

export default STATE_KEYS
// Might make sense to add a useReducer() function to handle the amount of state orrr redux?
