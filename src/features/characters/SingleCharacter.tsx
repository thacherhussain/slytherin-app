import React from 'react'
import {StyleSheet} from 'react-native'
import {Text, Box, Center, Image} from 'native-base'

import {SingleCharacterProps} from '@navigation-types'
import {Page} from '@components'
import {useGetSingleCharacterQuery} from './charactersSlice'
import {blankCharacter} from '../../utils/blankCharacter'

export const SingleCharacter = ({route}: SingleCharacterProps) => {
  const {data: character = blankCharacter} = useGetSingleCharacterQuery(
    route.params.id,
  )

  return (
    <Page>
      {character.image ? (
        <Center>
          <Image
            source={{uri: character.image}}
            alt={'Character Image'}
            style={styles.image}
          />
        </Center>
      ) : null}
      <Box flex={1} paddingX={10} paddingTop={5}>
        <Text fontSize={'lg'}>Name: {character.name}</Text>
        {character.house ? (
          <Text fontSize={'lg'}>House: {character.house}</Text>
        ) : null}
        {character.patronus ? (
          <Text fontSize={'lg'}>Patronus: {character.patronus}</Text>
        ) : null}
        {character.ancestry ? (
          <Text fontSize={'lg'}>Ancestry: {character.ancestry}</Text>
        ) : null}
        {character.wand ? (
          <Text fontSize={'lg'}>
            Wand: {character.wand.wood}, {character.wand.core},{' '}
            {character.wand.length} inches
          </Text>
        ) : null}
      </Box>
    </Page>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
})
