import React, {useEffect, useState} from 'react'
import {TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import {fetchCharacters} from '../store/actions/charactersActions'

import {
  Text,
  Box,
  FlatList,
  VStack,
  HStack,
  ChevronRightIcon,
  Button,
} from 'native-base'

import {CharactersProps} from '@navigation-types'
import {Page, ErrorText, LoadingSpinner} from '@components'

export const Characters = ({navigation}: CharactersProps) => {
  const characters = useSelector(state => state.characters.characters)
  const loading = useSelector(state => state.characters.loading)
  const hasErrors = useSelector(state => state.characters.hasErrors)
  const dispatch = useDispatch()
  const [charactersToShow, setCharactersToShow] = useState(characters)

  const slytherins = characters.filter(character => {
    return character.house === 'Slytherin'
  })

  const gryffindor = characters.filter(character => {
    return character.house === 'Gryffindor'
  })
  const hufflepuff = characters.filter(character => {
    return character.house === 'Hufflepuff'
  })
  const ravenclaw = characters.filter(character => {
    return character.house === 'Ravenclaw'
  })

  const showHouseCharacters = (type: string) => {
    switch (type) {
      case 'Slytherin':
        setCharactersToShow(slytherins)
        break
      case 'Gryffindor':
        setCharactersToShow(gryffindor)
        break
      case 'Hufflepuff':
        setCharactersToShow(hufflepuff)
        break
      case 'Ravenclaw':
        setCharactersToShow(ravenclaw)
        break
      default:
        setCharactersToShow(characters)
    }
  }

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  useEffect(() => {
    setCharactersToShow(characters)
  }, [characters])

  const getHouseButton = (house: string) => {
    let color
    switch (house) {
      case 'Slytherin':
        color = 'tertiary.800'
        break
      case 'Gryffindor':
        color = 'danger.800'
        break
      case 'Hufflepuff':
        color = 'yellow.500'
        break
      case 'Ravenclaw':
        color = 'blue.800'
        break
      case 'All':
        color = 'darkBlue.800'
        break
    }

    return (
      <Button
        backgroundColor={color}
        onPress={() => showHouseCharacters(house)}
      >
        {house}
      </Button>
    )
  }

  return (
    <Page noScroll>
      <HStack justifyContent={'space-between'} padding={'1'}>
        {getHouseButton('Slytherin')}
        {getHouseButton('Gryffindor')}
        {getHouseButton('Ravenclaw')}
        {getHouseButton('Hufflepuff')}
      </HStack>
      <Box padding={'1'}>{getHouseButton('All')}</Box>
      <Box>
        {hasErrors ? <ErrorText text={'Error Loading Characters'} /> : null}
        {loading ? (
          <Box padding={10}>
            <LoadingSpinner text={'Loading'} />
          </Box>
        ) : (
          <FlatList
            data={charactersToShow}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SingleCharacter', {
                    id: item.id,
                    name: item.name,
                  })
                }
              >
                <Box
                  borderBottomWidth='1'
                  borderColor='coolGray.200'
                  pl='4'
                  pr='5'
                  py='2'
                >
                  <HStack space={3} justifyContent='space-between'>
                    <VStack>
                      <Text color='coolGray.800' bold>
                        {item.name}
                      </Text>
                      <Text color='coolGray.600'>{item.house}</Text>
                    </VStack>
                    <ChevronRightIcon />
                  </HStack>
                </Box>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </Box>
    </Page>
  )
}
