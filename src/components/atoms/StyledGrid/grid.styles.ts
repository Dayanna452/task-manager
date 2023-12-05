import styled, { css } from 'styled-components'


import { GridUIProps } from './grid.interface'
import { getGridAlignItems, getGridDisplay, getGridFlexDirection, getGridJustifyContent, getGridMinHeight, getGridOffset, getGridSpacing } from '../../../interfaces/grid.function'

export const GridWrapper = styled.div<GridUIProps>`
  --Grid-rowSpacing: ${({ rowSpacing, $spacing, container }) =>
    container && getGridSpacing(rowSpacing || $spacing, 'xs')};

  --Grid-columnSpacing: ${({ columnSpacing, $spacing, container }) =>
    container && getGridSpacing(columnSpacing || $spacing, 'xs')};
  --Grid-columns: ${({ columns, container }) =>
    container &&
    (typeof columns === 'number'
      ? columns
      : typeof columns === 'object' && columns.xs)};

  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.xs2) ||
      (typeof rowSpacing === 'object' && rowSpacing.xs2) ||
      (typeof columnSpacing === 'object' && columnSpacing.xs2)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'xs2')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'xs2')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.sm) ||
      (typeof rowSpacing === 'object' && rowSpacing.sm) ||
      (typeof columnSpacing === 'object' && columnSpacing.sm)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'sm')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'sm')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.sm2) ||
      (typeof rowSpacing === 'object' && rowSpacing.sm2) ||
      (typeof columnSpacing === 'object' && columnSpacing.sm2)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'sm2')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'sm2')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.md) ||
      (typeof rowSpacing === 'object' && rowSpacing.md) ||
      (typeof columnSpacing === 'object' && columnSpacing.md)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'md')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'md')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.md2) ||
      (typeof rowSpacing === 'object' && rowSpacing.md2) ||
      (typeof columnSpacing === 'object' && columnSpacing.md2)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'md2')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'md2')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.lg) ||
      (typeof rowSpacing === 'object' && rowSpacing.lg) ||
      (typeof columnSpacing === 'object' && columnSpacing.lg)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'lg')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'lg')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.lg2) ||
      (typeof rowSpacing === 'object' && rowSpacing.lg2) ||
      (typeof columnSpacing === 'object' && columnSpacing.lg2)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'lg2')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'lg2')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.xl) ||
      (typeof rowSpacing === 'object' && rowSpacing.xl) ||
      (typeof columnSpacing === 'object' && columnSpacing.xl)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'xl')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'xl')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.xl2) ||
      (typeof rowSpacing === 'object' && rowSpacing.xl2) ||
      (typeof columnSpacing === 'object' && columnSpacing.xl2)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'xl2')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'xl2')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.xl3) ||
      (typeof rowSpacing === 'object' && rowSpacing.xl3) ||
      (typeof columnSpacing === 'object' && columnSpacing.xl3)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'xl3')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'xl3')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.xl4) ||
      (typeof rowSpacing === 'object' && rowSpacing.xl4) ||
      (typeof columnSpacing === 'object' && columnSpacing.xl4)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'xl4')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'xl4')};
      }
    `}
  ${({ rowSpacing, $spacing, columnSpacing, container }) =>
    ((typeof $spacing === 'object' && $spacing.xl5) ||
      (typeof rowSpacing === 'object' && rowSpacing.xl5) ||
      (typeof columnSpacing === 'object' && columnSpacing.xl5)) &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        --Grid-rowSpacing: ${container &&
        getGridSpacing(rowSpacing || $spacing, 'xl5')};
        --Grid-columnSpacing: ${container &&
        getGridSpacing(columnSpacing || $spacing, 'xl5')};
      }
    `}


    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        --Grid-columns: ${container && columns.xs2};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        --Grid-columns: ${container && columns.sm};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        --Grid-columns: ${container && columns.sm2};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        --Grid-columns: ${container && columns.md};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        --Grid-columns: ${container && columns.md2};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        --Grid-columns: ${container && columns.lg};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        --Grid-columns: ${container && columns.lg2};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        --Grid-columns: ${container && columns.xl};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        --Grid-columns: ${container && columns.xl2};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        --Grid-columns: ${container && columns.xl3};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        --Grid-columns: ${container && columns.xl4};
      }
    `}
    ${({ container, columns }) =>
    typeof columns === 'object' &&
    columns.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        --Grid-columns: ${container && columns.xl5};
      }
    `}

  min-width: 0;
  box-sizing: border-box;

  ${({ container, disableEqualOverflow }) =>
    container &&
    css`
      display: flex;
      flex-flow: row wrap;
      margin: ${disableEqualOverflow
        ? 'calc(var(--Grid-rowSpacing) * -1) 0px 0px calc(var(--Grid-columnSpacing) * -1)'
        : 'calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2)'};

      & > div {
        padding: ${disableEqualOverflow &&
        'var(--Grid-rowSpacing) 0px 0px var(--Grid-columnSpacing)'};
      }
    `};

  ${({
    container,
    xs,
    xs2,
    sm,
    sm2,
    md,
    md2,
    lg,
    lg2,
    xl,
    xl2,
    xl3,
    xl4,
    xl5
  }) =>
    !container &&
    css`
      flex-grow: ${typeof xs === 'boolean'
        ? 1
        : (typeof xs === 'number' || xs === 'auto') && 0};
      flex-basis: ${typeof xs === 'boolean'
        ? 0
        : (typeof xs === 'number' || xs === 'auto') && 'auto'};
      flex-shrink: ${xs === 'auto' && 0};
      max-width: ${typeof xs === 'boolean' ? '100%' : xs === 'auto' && 'none'};
      width: ${typeof xs === 'number'
        ? `calc(100% * ${xs} / var(--Grid-columns))`
        : xs === 'auto' && 'auto'};
      padding: calc(var(--Grid-rowSpacing) / 2)
        calc(var(--Grid-columnSpacing) / 2);

      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        flex-grow: ${typeof xs2 === 'boolean'
          ? 1
          : typeof xs2 === 'number' && 0};
        flex-basis: ${typeof xs2 === 'boolean'
          ? 0
          : (typeof xs2 === 'number' || xs2 === 'auto') && 'auto'};
        max-width: ${typeof xs2 === 'boolean'
          ? '100%'
          : xs2 === 'auto' && 'none'};
        width: ${typeof xs2 === 'number'
          ? `calc(100% * ${xs2} / var(--Grid-columns))`
          : xs2 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        flex-grow: ${typeof sm === 'boolean' ? 1 : typeof sm === 'number' && 0};
        flex-basis: ${typeof sm === 'boolean'
          ? 0
          : (typeof sm === 'number' || sm === 'auto') && 'auto'};
        max-width: ${typeof sm === 'boolean'
          ? '100%'
          : sm === 'auto' && 'none'};
        width: ${typeof sm === 'number'
          ? `calc(100% * ${sm} / var(--Grid-columns))`
          : sm === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        flex-grow: ${typeof sm2 === 'boolean'
          ? 1
          : typeof sm2 === 'number' && 0};
        flex-basis: ${typeof sm2 === 'boolean'
          ? 0
          : (typeof sm2 === 'number' || sm2 === 'auto') && 'auto'};
        max-width: ${typeof sm2 === 'boolean'
          ? '100%'
          : sm2 === 'auto' && 'none'};
        width: ${typeof sm2 === 'number'
          ? `calc(100% * ${sm2} / var(--Grid-columns))`
          : sm2 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-grow: ${typeof md === 'boolean' ? 1 : typeof md === 'number' && 0};
        flex-basis: ${typeof md === 'boolean'
          ? 0
          : (typeof md === 'number' || md === 'auto') && 'auto'};
        max-width: ${typeof md === 'boolean'
          ? '100%'
          : md === 'auto' && 'none'};
        width: ${typeof md === 'number'
          ? `calc(100% * ${md} / var(--Grid-columns))`
          : md === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        flex-grow: ${typeof md2 === 'boolean'
          ? 1
          : typeof md2 === 'number' && 0};
        flex-basis: ${typeof md2 === 'boolean'
          ? 0
          : (typeof md2 === 'number' || md2 === 'auto') && 'auto'};
        max-width: ${typeof md2 === 'boolean'
          ? '100%'
          : md2 === 'auto' && 'none'};
        width: ${typeof md2 === 'number'
          ? `calc(100% * ${md2} / var(--Grid-columns))`
          : md2 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        flex-grow: ${typeof lg === 'boolean' ? 1 : typeof lg === 'number' && 0};
        flex-basis: ${typeof lg === 'boolean'
          ? 0
          : (typeof lg === 'number' || lg === 'auto') && 'auto'};
        max-width: ${typeof lg === 'boolean'
          ? '100%'
          : lg === 'auto' && 'none'};
        width: ${typeof lg === 'number'
          ? `calc(100% * ${lg} / var(--Grid-columns))`
          : lg === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        flex-grow: ${typeof lg2 === 'boolean'
          ? 1
          : typeof lg2 === 'number' && 0};
        flex-basis: ${typeof lg2 === 'boolean'
          ? 0
          : (typeof lg2 === 'number' || lg2 === 'auto') && 'auto'};
        max-width: ${typeof lg2 === 'boolean'
          ? '100%'
          : lg2 === 'auto' && 'none'};
        width: ${typeof lg2 === 'number'
          ? `calc(100% * ${lg2} / var(--Grid-columns))`
          : lg2 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        flex-grow: ${typeof xl === 'boolean' ? 1 : typeof xl === 'number' && 0};
        flex-basis: ${typeof xl === 'boolean'
          ? 0
          : (typeof xl === 'number' || xl === 'auto') && 'auto'};
        max-width: ${typeof xl === 'boolean'
          ? '100%'
          : xl === 'auto' && 'none'};
        width: ${typeof xl === 'number'
          ? `calc(100% * ${xl} / var(--Grid-columns))`
          : xl === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        flex-grow: ${typeof xl2 === 'boolean'
          ? 1
          : typeof xl2 === 'number' && 0};
        flex-basis: ${typeof xl2 === 'boolean'
          ? 0
          : (typeof xl2 === 'number' || xl2 === 'auto') && 'auto'};
        max-width: ${typeof xl2 === 'boolean'
          ? '100%'
          : xl2 === 'auto' && 'none'};
        width: ${typeof xl2 === 'number'
          ? `calc(100% * ${xl2} / var(--Grid-columns))`
          : xl2 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-grow: ${typeof xl3 === 'boolean'
          ? 1
          : typeof xl3 === 'number' && 0};
        flex-basis: ${typeof xl3 === 'boolean'
          ? 0
          : (typeof xl3 === 'number' || xl3 === 'auto') && 'auto'};
        max-width: ${typeof xl3 === 'boolean'
          ? '100%'
          : xl3 === 'auto' && 'none'};
        width: ${typeof xl3 === 'number'
          ? `calc(100% * ${xl3} / var(--Grid-columns))`
          : xl3 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        flex-grow: ${typeof xl4 === 'boolean'
          ? 1
          : typeof xl4 === 'number' && 0};
        flex-basis: ${typeof xl4 === 'boolean'
          ? 0
          : (typeof xl4 === 'number' || xl4 === 'auto') && 'auto'};
        max-width: ${typeof xl4 === 'boolean'
          ? '100%'
          : xl4 === 'auto' && 'none'};
        width: ${typeof xl4 === 'number'
          ? `calc(100% * ${xl4} / var(--Grid-columns))`
          : xl4 === 'auto' && 'auto'};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        flex-grow: ${typeof xl5 === 'boolean'
          ? 1
          : typeof xl5 === 'number' && 0};
        flex-basis: ${typeof xl5 === 'boolean'
          ? 0
          : (typeof xl5 === 'number' || xl5 === 'auto') && 'auto'};
        max-width: ${typeof xl5 === 'boolean'
          ? '100%'
          : xl5 === 'auto' && 'none'};
        width: ${typeof xl5 === 'number'
          ? `calc(100% * ${xl5} / var(--Grid-columns))`
          : xl5 === 'auto' && 'auto'};
      }
    `};

  min-height: ${({ minHeight }) => getGridMinHeight(minHeight, 'xs')};

  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        min-height: ${getGridMinHeight(minHeight, 'xs2')};
      }
    `}

  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        min-height: ${getGridMinHeight(minHeight, 'sm')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        min-height: ${getGridMinHeight(minHeight, 'sm2')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-height: ${getGridMinHeight(minHeight, 'md')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        min-height: ${getGridMinHeight(minHeight, 'md2')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        min-height: ${getGridMinHeight(minHeight, 'lg')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        min-height: ${getGridMinHeight(minHeight, 'lg2')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        min-height: ${getGridMinHeight(minHeight, 'xl')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        min-height: ${getGridMinHeight(minHeight, 'xl2')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        min-height: ${getGridMinHeight(minHeight, 'xl3')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        min-height: ${getGridMinHeight(minHeight, 'xl4')};
      }
    `}
  
  ${({ minHeight }) =>
    typeof minHeight === 'object' &&
    minHeight.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        min-height: ${getGridMinHeight(minHeight, 'xl5')};
      }
    `}

    justify-content: ${({ justifyContent }) =>
    getGridJustifyContent(justifyContent, 'xs')};

  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'xs2')};
      }
    `}

  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'sm')};
      }
    `}
  
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'sm2')};
      }
    `}
  
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'md')};
      }
    `}
  
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'md2')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'lg')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'lg2')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'xl')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'xl2')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'xl3')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'xl4')};
      }
    `}
  ${({ justifyContent }) =>
    typeof justifyContent === 'object' &&
    justifyContent.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        justify-content: ${getGridJustifyContent(justifyContent, 'xl5')};
      }
    `}

    // ALIGN ITEMS
    align-items: ${({ alignItems }) => getGridAlignItems(alignItems, 'xs')};

  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        align-items: ${getGridAlignItems(alignItems, 'xs2')};
      }
    `}

  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        align-items: ${getGridAlignItems(alignItems, 'sm')};
      }
    `}
  
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        align-items: ${getGridAlignItems(alignItems, 'sm2')};
      }
    `}
  
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        align-items: ${getGridAlignItems(alignItems, 'md')};
      }
    `}
  
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        align-items: ${getGridAlignItems(alignItems, 'md2')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        align-items: ${getGridAlignItems(alignItems, 'lg')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        align-items: ${getGridAlignItems(alignItems, 'lg2')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        align-items: ${getGridAlignItems(alignItems, 'xl')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        align-items: ${getGridAlignItems(alignItems, 'xl2')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        align-items: ${getGridAlignItems(alignItems, 'xl3')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        align-items: ${getGridAlignItems(alignItems, 'xl4')};
      }
    `}
  ${({ alignItems }) =>
    typeof alignItems === 'object' &&
    alignItems.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        align-items: ${getGridAlignItems(alignItems, 'xl5')};
      }
    `}

  // Display
  display: ${({ $display: display }) => getGridDisplay(display, 'xs')};

  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        display: ${getGridDisplay(display, 'xs2')};
      }
    `}

  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        display: ${getGridDisplay(display, 'sm')};
      }
    `}
  
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        display: ${getGridDisplay(display, 'sm2')};
      }
    `}
  
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: ${getGridDisplay(display, 'md')};
      }
    `}
  
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        display: ${getGridDisplay(display, 'md2')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        display: ${getGridDisplay(display, 'lg')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        display: ${getGridDisplay(display, 'lg2')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        display: ${getGridDisplay(display, 'xl')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        display: ${getGridDisplay(display, 'xl2')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        display: ${getGridDisplay(display, 'xl3')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        display: ${getGridDisplay(display, 'xl4')};
      }
    `}
  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        display: ${getGridDisplay(display, 'xl5')};
      }
    `}

  // Flex Direction
  flex-direction: ${({ flexDirection }) =>
    flexDirection && getGridFlexDirection(flexDirection, 'xs')};

  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'xs2')};
      }
    `}

  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'sm')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'sm2')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'md')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'md2')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'lg')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'lg2')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'xl')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'xl2')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'xl3')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'xl4')};
      }
    `}
  
  ${({ flexDirection }) =>
    typeof flexDirection === 'object' &&
    flexDirection.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        flex-direction: ${getGridFlexDirection(flexDirection, 'xl5')};
      }
    `}

  // Offset
  margin-left: ${({ $offset: offset }) =>
    offset &&
    (offset === 'auto'
      ? offset
      : `calc(100% * ${getGridOffset(offset, 'xs')} / var(--Grid-columns))`)};

  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.xs2 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        margin-left: ${offset.xs2 === 'auto'
          ? offset.xs2
          : `calc(
          100% * ${getGridOffset(offset, 'xs2')} / var(--Grid-columns)
        )`};
      }
    `}

  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.sm !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        margin-left: ${offset.sm === 'auto'
          ? offset.sm
          : `calc(
          100% * ${getGridOffset(offset, 'sm')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.sm2 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        margin-left: ${offset.sm2 === 'auto'
          ? offset.sm2
          : `calc(
          100% * ${getGridOffset(offset, 'sm2')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.md !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-left: ${offset.md === 'auto'
          ? offset.md
          : `calc(
          100% * ${getGridOffset(offset, 'md')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.md2 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        margin-left: ${offset.md2 === 'auto'
          ? offset.md2
          : `calc(
          100% * ${getGridOffset(offset, 'md2')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.lg !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        margin-left: ${offset.lg === 'auto'
          ? offset.lg
          : `calc(
          100% * ${getGridOffset(offset, 'lg')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.lg2 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        margin-left: ${offset.lg2 === 'auto'
          ? offset.lg2
          : `calc(
          100% * ${getGridOffset(offset, 'lg2')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.xl !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        margin-left: ${offset.xl === 'auto'
          ? offset.xl
          : `calc(
          100% * ${getGridOffset(offset, 'xl')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.xl2 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        margin-left: ${offset.xl2 === 'auto'
          ? offset.xl2
          : `calc(
          100% * ${getGridOffset(offset, 'xl2')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.xl3 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        margin-left: ${offset.xl3 === 'auto'
          ? offset.xl3
          : `calc(
          100% * ${getGridOffset(offset, 'xl3')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.xl4 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        margin-left: ${offset.xl4 === 'auto'
          ? offset.xl4
          : `calc(
          100% * ${getGridOffset(offset, 'xl4')} / var(--Grid-columns)
        )`};
      }
    `}
  
  ${({ $offset: offset }) =>
    typeof offset === 'object' &&
    offset.xl5 !== undefined &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        margin-left: ${offset.xl5 === 'auto'
          ? offset.xl5
          : `calc(
          100% * ${getGridOffset(offset, 'xl5')} / var(--Grid-columns)
        )`};
      }
    `}
`
