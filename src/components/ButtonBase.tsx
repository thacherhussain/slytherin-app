import React, {FC} from 'react'
import {Button, Box} from 'native-base'

type ButtonBaseProps = {
  text: string
  onButtonPress: () => void
}

export const ButtonBase: FC<ButtonBaseProps> = props => {
  const {text, onButtonPress} = props

  return (
    <Box paddingX={10} paddingBottom={35}>
      <Button backgroundColor={'brand.primary'} onPress={() => onButtonPress()}>
        {text}
      </Button>
    </Box>
  )
}
