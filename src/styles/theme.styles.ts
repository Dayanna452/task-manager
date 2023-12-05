import { ThemeType } from '../interfaces/theme.interface'
import { palette } from './palette';

const shadows = {
  small:
    '0px 2px 2px -2px rgba(31, 27, 45, 0.08), 0px 4px 12px rgba(31, 27, 45, 0.08)',
  default:
    '0px 2px 8px -4px rgba(31, 27, 45, 0.12), 0px 4px 16px rgba(31, 27, 45, 0.12)',
  large:
    '0px 4px 12px -6px rgba(31, 27, 45, 0.2), 0px 8px 16px rgba(31, 27, 45, 0.16)'
}

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '560px',
  tablet: '768px',
  tabletM: '900px',
  laptop: '1024px',
  laptopS: '1150px',
  laptopM: '1260px',
  laptopL: '1440px',
  desktop: '1650px',
  desktopM: '1950px',
  desktopL: '2560px'
}

const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  mobileXL: `(min-width: ${breakpoints.mobileXL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  tabletM: `(min-width: ${breakpoints.tabletM})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopS: `(min-width: ${breakpoints.laptopS})`,
  laptopM: `(min-width: ${breakpoints.laptopM})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopM: `(min-width: ${breakpoints.desktopM})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`
}

const Theme: ThemeType = {
  breakpoints,
  palette,
  shadows: shadows,
  device: device
}

export default Theme
