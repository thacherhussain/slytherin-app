import React, {FC} from 'react'
import {Box, Text} from 'native-base'

type ErrorTextProps = {
  text: string
}

export const ErrorText: FC<ErrorTextProps> = props => {
  const {text} = props

  return (
    <Box alignItems={'center'}>
      <Text color={'red.500'} fontSize={'lg'}>
        {text}
      </Text>
    </Box>
  )
}
