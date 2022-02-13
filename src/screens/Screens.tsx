import React from 'react'
import {View} from 'react-native'
import {Text, Box, Button, Flex} from 'native-base'

import {HomeProps, DataProps, AnotherProps} from '../utils/types'
import {Page, ButtonBase} from '../components/Components'
import SlytherinIcon from '../assets/SlytherinIcon.svg'

export const Home = ({navigation}: HomeProps) => {

  const toDataButton = <ButtonBase text={'Navigate to Data'} onButtonPress={() => navigation.navigate('Data')} />

  return (
    <Page button={toDataButton} title={'Home'}>
      <Flex flexDirection={'column'} alignContent={'space-between'}>
        <Box alignItems="center" justifyContent="center" paddingTop={10}>
          <SlytherinIcon height={250} width={250} />
        </Box>
      </Flex>
    </Page>
  )
}

export const Data = ({navigation}: DataProps) => {
  const toAnotherButton = <ButtonBase text={'Navigate to Another'} onButtonPress={() => navigation.navigate('Another')} />

  return (
    <Page button={toAnotherButton} title={'Data Screen'}>
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

export const Another = ({navigation}: AnotherProps) => {
  const toHomeButton = <ButtonBase text={'Navigate to Home'} onButtonPress={() => navigation.navigate('Home')} />

  return (
    <Page button={toHomeButton} title={'Another Screen'}>
      <View>
        <Box flex={1} bg="#f2f2f2" alignItems="center" justifyContent="center">
          <Text fontSize={'lg'} color={'brand.primary'} >Content Here</Text>
        </Box>
      </View>
    </Page>
  )
}
