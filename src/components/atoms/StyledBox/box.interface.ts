import { ThemeType } from "../../../interfaces/theme.interface"

export interface BoxProps{
  padding?:number
  paddingLeft?:number
  paddingTop?:number
  padddingRight?:number
  paddingBottom?:number
  children:React.ReactNode
  bgColor?:(theme: Pick<ThemeType, 'palette'>) => string
}