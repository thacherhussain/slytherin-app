import React from 'react'
import {View} from 'react-native'
import {Text, Box, Button, Image} from 'native-base'

import {HomeProps, DataProps, AnotherProps} from '../utils/types'
import Page from '../components/Page'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center" justifyContent="center">
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
            size={250}
            width={'100%'}
          />
          <Box
            flex={1}
            bg="#f2f2f2"
            alignItems="center"
            justifyContent="center"
            paddingTop={5}>
            <Button onPress={() => navigation.navigate('Data')}>To Data</Button>
          </Box>
          <Box paddingTop={5}>
            <Text fontSize={'lg'} color={'brand.primary'}>
              Home Screen
            </Text>
          </Box>
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
