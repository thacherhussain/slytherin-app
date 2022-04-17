import React, {FC} from 'react'
import {Button, Box} from 'native-base'

type ButtonBaseProps = {
  text: string
  onButtonPress: () => void
  backgroundColor?: string
}

export const ButtonBase: FC<ButtonBaseProps> = props => {
  const {text, onButtonPress, backgroundColor} = props

  return (
    <Box paddingX={10} paddingBottom={15}>
      <Button
        backgroundColor={backgroundColor ?? 'brand.primary'}
        onPress={() => onButtonPress()}>
        {text}
      </Button>
    </Box>
  )
}
