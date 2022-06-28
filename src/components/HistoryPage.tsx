import React, {FC, ReactElement, ReactNode} from 'react'
import {Center} from 'native-base'

import {Page} from '@components'

type HistoryPageProps = {
  title: string
  image?: ReactNode
  descriptionText: ReactElement
  button?: ReactNode
}

export const HistoryPage: FC<HistoryPageProps> = props => {
  const {title, image, descriptionText, button} = props

  return (
    <Page title={title} button={button}>
      <Center margin={5}>{image}</Center>
      <Center margin={5}>{descriptionText}</Center>
    </Page>
  )
}
