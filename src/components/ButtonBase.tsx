import React, {FC} from 'react'
import {Button, Box, useTheme} from 'native-base'

type ButtonBaseProps = {
  text: string
  onButtonPress: () => void
  backgroundColor?: string
}

export const ButtonBase: FC<ButtonBaseProps> = props => {
  const {text, onButtonPress, backgroundColor} = props
  const {colors} = useTheme()

  return (
    <Box paddingX={10} paddingBottom={15}>
      <Button
        backgroundColor={backgroundColor ?? colors.primary[800]}
        onPress={() => onButtonPress()}
      >
        {text}
      </Button>
    </Box>
  )
}
