import React from 'react'
// import React, {useEffect} from 'react'
// import {useSelector, useDispatch} from 'react-redux'

// import {fetchCharacters} from '../actions/charactersActions'

import {Text, Box, FlatList, VStack, HStack} from 'native-base'

import {CharactersProps} from '../utils/types'
import {Page, ButtonBase} from '../components'
import charactersData from '../charactersData.json'

export const Characters = ({navigation}: CharactersProps) => {
  // const characters = useSelector(state => state.characters.characters)
  // const loading = useSelector(state => state.characters.loading)
  // const hasErrors = useSelector(state => state.characters.hasErrors)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchCharacters())
  // }, [dispatch])

  const toSingleCharacter = (
    <ButtonBase
      text={'Single Character'}
      onButtonPress={() => navigation.navigate('SingleCharacter')}
    />
  )

  return (
    <Page button={toSingleCharacter} noScroll>
      <Box>
        <FlatList
          data={charactersData}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.name}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.house}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </Page>
  )
}
