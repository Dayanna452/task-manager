import { ThemeType } from '../../../interfaces/theme.interface'

export interface TabsProps {
  height?: string
  columnGap?: number
  borderRadius?: number
  maxHeight?:string
  padding?: string
  children: React.ReactNode
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string
}

export interface TabsContainerProps extends Omit<TabsProps, ''> {}
