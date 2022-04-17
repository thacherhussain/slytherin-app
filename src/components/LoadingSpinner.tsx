import React, {FC} from 'react'
import {HStack, Spinner, Heading} from 'native-base'

type LoadingSpinnerProps = {
  text: string
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = props => {
  const {text} = props

  return (
    <HStack space={2} justifyContent="center">
      <Spinner color="#3293d6" accessibilityLabel="Loading content" />
      <Heading color="#3293d6" fontSize="md">
        {text}
      </Heading>
    </HStack>
  )
}
