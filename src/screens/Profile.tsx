import React, { useState } from 'react'
import {
  useTheme,
  Text,
  Box,
  Center,
  VStack,
  FormControl,
  Input,
  Select,
  Radio,
  Button,
  CheckIcon,
} from 'native-base'
// import { useForm, Controller } from 'react-hook-form'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form'

import { TextInput } from '../components/formComponents/TextInput'

import { Page } from '@components'

type FieldValues = {
  name: string
  house: string
  team: string
}

export const Profile = () => {
  const { colors } = useTheme()
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<FormData>()

  const { ...methods } = useForm({ mode: 'onChange' })

  const onSubmit: SubmitHandler<FieldValues> = data => console.log({ data })

  // const onSubmit = (data: FormData) => {
  //   console.log(data)
  // }

  const [formError, setError] = useState<boolean>(false)

  const onError: SubmitErrorHandler<FieldValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <Page>
      <Center pt={'12'}>
        <VStack width='90%' space={4}>
          <FormProvider {...methods}>
            <VStack width='90%' space={4}>
              <TextInput
                name={'email'}
                label={'Email'}
                defaultValue={''}
                setFormError={setError}
                rules={{
                  required: 'Email is required!',
                  pattern: {
                    value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                    message: 'Must be formatted: john.doe@email.com',
                  },
                }}
              />
              <TextInput
                name={'name'}
                label={'Name'}
                setFormError={setError}
                rules={{ required: 'Name is required' }}
              />
            </VStack>
          </FormProvider>
          {/* <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl>
            <FormControl.Label>House</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder='Pick Your House'
                  selectedValue={value}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    endIcon: <CheckIcon size='5' />,
                  }}
                  size={'xl'}
                >
                  <Select.Item label='Slytherin' value='slytherin' />
                  <Select.Item label='Gryfindor' value='gryfindor' />
                  <Select.Item label='Ravenclaw' value='ravenclaw' />
                  <Select.Item label='Hufflepuff' value='hufflepuff' />
                </Select>
              )}
              name='house'
              defaultValue=''
            />
          </FormControl>
          <FormControl>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              color={'gray.500'}
              paddingBottom={'2'}
            >
              Order of the Phoenix or Death Eaters?
            </Text>
            <Controller
              control={control}
              render={({ field: { onChange } }) => (
                <Radio.Group
                  name='team'
                  flexDirection='column'
                  onChange={val => onChange(val)}
                  colorScheme={'brand'}
                >
                  <Radio value='phoenix' size={'lg'}>
                    <Text fontSize={'lg'} ml={1} mr={3}>
                      Order of the Phoenix
                    </Text>
                  </Radio>
                  <Radio value='death' size={'lg'}>
                    <Text fontSize={'lg'} ml={1} mr={3}>
                      Death Eaters
                    </Text>
                  </Radio>
                </Radio.Group>
              )}
              name='team'
            />
          </FormControl>*/}
          <Box paddingTop={6}>
            <Button
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onPress={methods.handleSubmit(onSubmit, onError)}
              bgColor={colors.tertiary[900]}
              size={'lg'}
            >
              Submit
            </Button>
          </Box>
        </VStack>
      </Center>
    </Page>
  )
}
