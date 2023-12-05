import { ThemeType } from "../../../interfaces/theme.interface"

export interface TabsProps{
  height?:string
  columnGap?:number
  borderRadius?:number
  children:React.ReactNode
  bgColor?:(theme: Pick<ThemeType, 'palette'>) => string
}

export interface TabsContainerProps extends Omit<TabsProps, ''>{}