import { CalendarProps } from 'react-calendar'
import { CalendarWrapper } from './calendar.styles'

export const StyledCalendar: React.FC<CalendarProps> = ({
  locale = 'en',
  ...props
}) => {
  return <CalendarWrapper locale={locale} {...props} />
}
