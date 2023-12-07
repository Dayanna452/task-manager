import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'
import ReactCalendar from 'react-calendar'

export const CalendarWrapper = styled(ReactCalendar)`
  &.react-calendar {
    border: 1px solid ${({ theme }) => theme.palette.grey[200]};
    background: ${({ theme }) => theme.palette.grey[500]};

    .react-calendar__navigation {
      color: ${({ theme }) => theme.palette.common.white};
    }

    .react-calendar__month-view__weekdays__weekday {
      color: ${({ theme }) => theme.palette.common.white};

      abbr {
        text-decoration: none;
      }
    }

    .react-calendar__tile {
      color: ${({ theme }) => theme.palette.common.white};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${({ theme }) => theme.palette.grey[200]};
    }

    .react-calendar__tile--now {
      border-radius: 2px;
      background: ${({ theme }) => theme.palette.primary[400]};
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: ${({ theme }) => theme.palette.primary[400]};
    }

    .react-calendar__tile--active {
      background-color: ${({ theme }) => theme.palette.primary[400]};
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background-color: ${({ theme }) => theme.palette.grey[300]};
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background-color: ${({ theme }) => theme.palette.primary[400]};
    }
  }
`
