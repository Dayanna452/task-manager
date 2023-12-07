import { StyledText } from '../../atoms/StyledText'
import { ColumnItem } from './header.styles'

export const TableHeader = ({ columns }: { columns: string[] }) => {
  return (
    <>
      <ColumnItem>
        <StyledText
          text={columns[0]}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
          fontSize={15}
          fontWeight={400}
        />
      </ColumnItem>
      <ColumnItem>
        <StyledText
          text={columns[1]}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
          fontSize={15}
          fontWeight={400}
        />
      </ColumnItem>
      <ColumnItem>
        <StyledText
          text={columns[2]}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
          fontSize={15}
          fontWeight={400}
        />
      </ColumnItem>
      <ColumnItem>
        <StyledText
          text={columns[3]}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
          fontSize={15}
          fontWeight={400}
        />
      </ColumnItem>
      <ColumnItem>
        <StyledText
          text={columns[4]}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
          fontSize={15}
          fontWeight={400}
        />
      </ColumnItem>
    </>
  )
}
