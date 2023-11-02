import {createGlobalStyle} from "styled-components";

export const DarkThemeStyle = createGlobalStyle`
      body{
        background: linear-gradient(-140deg,rgba(204, 255, 0, 45%), rgba(255, 168, 0, 45%), rgba(210, 0, 255, 45%), rgba(97, 0, 255, 45%)) no-repeat;
      }
`;
export const LightThemeStyle = createGlobalStyle`
      body{
        background: linear-gradient(-140deg,rgba(255, 235, 56, 0.45), rgba(255, 216, 140, 0.45), rgba(183, 137, 193, 0.45), rgba(124, 43, 255, 0.45)) no-repeat;
      }
`;