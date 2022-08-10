import React from 'react'
import { Button, useTheme, useToken, useContrastText } from 'native-base'

import { HogwartsHouse } from 'src/types'

// Version of the house button that uses more of the available Native Base properties

export const HouseButton = ({
  house,
  onPress,
}: {
  house: HogwartsHouse | 'All'
  onPress: () => void
}) => {
  const theme = useTheme()
  const color = theme.colors[house]
  const temp = useToken('colors', color)
  const fontColor = useContrastText(temp)

  return (
    <Button
      backgroundColor={temp}
      _text={{ color: fontColor }}
      onPress={onPress}
    >
      {house}
    </Button>
  )
}
