/* pageSpecificStyles.js */
import css from 'styled-jsx/css'

// Scoped styles
export const definitions = css.global`        
.containerMain{
    display:grid;
    grid-template-columns: 150px 1fr;
    grid-template-areas:"nav define define";
    grid-gap:0px;
    height:100vh;
  }`
// Scoped styles
export const coolMap = css.global`        
.containerMain{
    display:grid;
    grid-template-columns: 150px 1fr;
    grid-template-areas:"nav map";
    grid-gap:0px;
    height:100vh;
  }`

// Scoped styles
export const signUp = css.global`        
.containerMain{
    display:grid;
    grid-template-columns: 150px 1fr;
    grid-template-areas:"nav map";
    grid-gap:0px;
    height:100vh;
  }`
