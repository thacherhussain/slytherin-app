import React from 'react'
import {View} from 'react-native'
import {Text, Box, Button, Image, Flex} from 'native-base'
import {SvgUri} from 'react-native-svg'

import {HomeProps, DataProps, AnotherProps} from '../utils/types'
import Page from '../components/Page'
import SlytherinIcon from '../assets/SlytherinIcon.svg'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page>
      <Flex flexDirection={'column'} alignContent={'space-between'}>
        <Box alignItems="center" justifyContent="center" paddingTop={10}>
          <SlytherinIcon height={250} width={250} />
        </Box>
        <Box padding={5}>
          <Text fontSize={'lg'} color={'brand.primary'}>
            Home Screen
          </Text>
        </Box>
        <Box padding={5}>
          <Button onPress={() => navigation.navigate('Data')}>To Data</Button>
        </Box>
      </Flex>
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
