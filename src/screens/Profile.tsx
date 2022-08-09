import React from 'react'
import {Box, Text} from 'native-base'

import {Page} from '@components'

export const Profile = () => {
  return (
    <Page>
      <Box alignItems={'center'} paddingTop={10} paddingBottom={5}>
        <Text fontSize={'lg'}>Main Text Here</Text>
      </Box>
    </Page>
  )
}
