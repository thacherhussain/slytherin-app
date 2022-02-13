import React from 'react'
import {View} from 'react-native'
import {Text, Box, Button, Image} from 'native-base'
import {SvgUri} from 'react-native-svg'

import {HomeProps, DataProps, AnotherProps} from '../utils/types'
import Page from '../components/Page'
import SlytherinIcon from '../assets/SlytherinIcon.svg'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center" justifyContent="center">
          <Box padding={5}>
            <Text fontSize={'lg'} color={'brand.primary'}>
              Home Screen
            </Text>
          </Box>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
            size={250}
            width={'100%'}
          />
        </Box>
        <Box padding={5}>
          <Button onPress={() => navigation.navigate('Data')}>To Data</Button>
        </Box>
        <Box padding={5}>
          <Text>Hello</Text>
          <SlytherinIcon height={250} width={250} />
        </Box>
      </View>
    </Page>
  )
}

export const Data = ({navigation}: DataProps) => {
  return (
    <Page>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center" justifyContent="center">
          <Text fontSize={'lg'} color={'blue.500'}>
            Data Screen
          </Text>
          <Button onPress={() => navigation.navigate('Another')}>
            To Another
          </Button>
        </Box>
      </View>
    </Page>
  )
}

export const Another = ({navigation}: AnotherProps) => {
  return (
    <Page>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center" justifyContent="center">
          <Text fontSize={'lg'}>Another Screen</Text>
          <Button onPress={() => navigation.navigate('Home')}>To Home</Button>
        </Box>
      </View>
    </Page>
  )
}
