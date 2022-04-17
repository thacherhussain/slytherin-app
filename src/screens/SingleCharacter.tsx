import React from 'react'
import {View} from 'react-native'
import {Text, Box} from 'native-base'

import {SingleCharacterProps} from '../navigation/types'
import {Page, ButtonBase} from '../components'
import {useSelector} from 'react-redux'

export const SingleCharacter = ({navigation, route}: SingleCharacterProps) => {
  const character = useSelector(
    state => state.characters.characters[route.params.id],
  )
  const toHomeButton = (
    <ButtonBase
      text={'Home'}
      onButtonPress={() => navigation.navigate('Home')}
    />
  )

  return (
    <Page button={toHomeButton}>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center">
          <Text fontSize={'lg'} color={'brand.primary'}>
            {character.name}{' '}
          </Text>
        </Box>
      </View>
    </Page>
  )
}
