interface Color {
  100?: string;
  200: string;
  300: string;
  400:string;
  500?:string;
  contrastText?: string;
}

interface Common {
  white: string;
  black: string;
}

interface GreyColor {
  50?: string;
  100?: string;
  200: string;
  300: string;
  400: string;
  500: string;
}

interface TextColor {
  primary: string;
  secondary: string;
  disabled: string;
  roseText: string;
}

interface Background{
  default?:string
  paper?:string
}

interface Shadow {
  small: string;
  default: string;
  large: string;
}

interface Palette {
  common: Common;
  primary: Color;
  secondary: Color;
  warning: Color;
  error:Color;
  info:Color;
  success:Color;
  grey: GreyColor;
  text?: TextColor;
  background: Background;
}

interface Breakpoints {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  mobileXL: string;
  tablet: string;
  tabletM: string;
  laptop: string;
  laptopS: string;
  laptopM: string;
  laptopL: string;
  desktop: string;
  desktopM: string;
  desktopL: string;
}

export interface ThemeType {
  breakpoints: Breakpoints;
  palette: Palette;
  device: Breakpoints;
  shadows: Shadow;
}
