import React from 'react'
import {
  useTheme,
  Text,
  Box,
  Center,
  VStack,
  FormControl,
  Input,
  Select,
  Checkbox,
  Radio,
  Button,
  CheckIcon,
} from 'native-base'
import { useForm, Controller } from 'react-hook-form'

import { Page } from '@components'

export const Profile = () => {
  return (
    <Page themedBackground>
      <Box alignItems={'center'} paddingTop={10} paddingBottom={5}>
        <Text fontSize={'lg'}>Main Text Here</Text>
      </Box>
    </Page>
  )
}
