import { TextStyled } from './text.styles'
import { TextProps } from './text.interface'
import { ThemeType } from '../../../interfaces/theme.interface'

export const StyledText: React.FC<TextProps> = ({
  sx,
  $color: color,
  textAlign,
  html,
  tag = 'h2',
  lineHeight = 'normal',
  textTransform,
  fontSize = 16,
  textDecoration,
  text = '',
  fontWeight = 500,
  style,
  ...props
}) => {
  const handleColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (color) {
      return color(theme)
    } else {
      return theme.palette.common.black
    }
  }

  if (html) {
    return (
      <TextStyled
        as={'div'}
        dangerouslySetInnerHTML={{ __html: text as string }}
        fontSize={fontSize}
        textAlign={textAlign}
       // lineHeight={lineHeight}
        fontWeight={fontWeight}
        style={sx || style}
        textTransform={textTransform}
        textDecoration={textDecoration}
        $color={
          handleColor as string & ((theme: Pick<ThemeType, 'palette'>) => string)
        }
        {...props}
      />
    )
  }

  return (
    <TextStyled
      as={tag}
      style={sx || style}
      fontSize={fontSize}
      textAlign={textAlign}
      //lineHeight={lineHeight}
      fontWeight={fontWeight}
      textTransform={textTransform}
      textDecoration={textDecoration}
      $color={
        handleColor as string & ((theme: Pick<ThemeType, 'palette'>) => string)
      }
      {...props}
    >
      {text}
    </TextStyled>
  )
}
