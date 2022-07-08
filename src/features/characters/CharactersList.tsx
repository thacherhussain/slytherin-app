import React, {useState, useMemo} from 'react'
import {TouchableOpacity} from 'react-native'

import {
  Text,
  Box,
  FlatList,
  VStack,
  HStack,
  ChevronRightIcon,
  Button,
  useTheme,
  useToken,
  useContrastText,
} from 'native-base'

import {CharactersProps} from '@navigation-types'
import {useGetAllCharactersQuery} from './charactersSlice'
import {Page, ErrorText, LoadingSpinner} from '@components'
import {Character, HogwartsHouse} from 'src/types'

const HouseButton = ({
  house,
  onClick,
}: {
  house: HogwartsHouse | 'All'
  onClick: () => void
}) => {
  const theme = useTheme()
  const color = theme.colors[house]
  const temp = useToken('colors', color)
  const fontColor = useContrastText(temp)

  return (
    <Button backgroundColor={temp} _text={{color: fontColor}} onPress={onClick}>
      {house}
    </Button>
  )
}
export const CharactersList = ({navigation}: CharactersProps) => {
  const {data, error, isLoading} = useGetAllCharactersQuery()

  const [filteredHouse, setFilteredHouse] = useState<HogwartsHouse | null>(null)

  const characters: Character[] = data || []
  const loading = isLoading
  const hasErrors = error

  const filteredCharacters = useMemo(() => {
    if (!filteredHouse) return characters

    const createFilterByHouse = (house: string) => (character: Character) =>
      character.house === house

    return characters.filter(createFilterByHouse(filteredHouse))
  }, [filteredHouse, characters])

  const houses: HogwartsHouse[] = [
    'Slytherin',
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
  ]

  return (
    <Page noScroll>
      <HStack justifyContent={'space-between'} padding={'1'}>
        {houses.map(house => (
          <HouseButton
            key={house}
            house={house}
            onClick={() => setFilteredHouse(house)}
          />
        ))}
      </HStack>
      <Box padding={'1'}>
        <HouseButton house={'All'} onClick={() => setFilteredHouse(null)} />
      </Box>
      <Box>
        {hasErrors ? <ErrorText text={'Error Loading Characters'} /> : null}
        {loading ? (
          <Box padding={10}>
            <LoadingSpinner text={'Loading'} />
          </Box>
        ) : (
          <FlatList
            data={filteredCharacters}
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
