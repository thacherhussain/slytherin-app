import React from 'react'
import {View} from 'react-native'
import {Text, Box} from 'native-base'

import {SingleCharacterProps} from '../utils/types'
import {Page, ButtonBase} from '../components'

export const SingleCharacter = ({navigation}: SingleCharacterProps) => {
  const toHomeButton = (
    <ButtonBase
      text={'Home'}
      onButtonPress={() => navigation.navigate('Home')}
    />
  )

  return (
    <Page button={toHomeButton}>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center" justifyContent="center">
          <Text fontSize={'lg'} color={'brand.primary'}>
            Content Here
          </Text>
        </Box>
      </View>
    </Page>
  )
}
