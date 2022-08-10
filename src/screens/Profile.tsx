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
  Radio,
  Button,
  CheckIcon,
} from 'native-base'
import { useForm, Controller } from 'react-hook-form'

import { Page } from '@components'

type FormData = {
  name: string
  house: string
  team: string
}

export const Profile = () => {
  const { colors } = useTheme()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Page>
      <Center pt={'12'}>
        <VStack width='90%' space={4}>
          <FormControl isRequired isInvalid={'name' in errors}>
            <FormControl.Label>First Name</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  size={'xl'}
                />
              )}
              name='name'
              rules={{ required: 'Field is required', minLength: 3 }}
            />
            <FormControl.ErrorMessage>
              {errors.name?.message}
            </FormControl.ErrorMessage>
          </FormControl>
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
          </FormControl>
          <Box paddingTop={6}>
            <Button
              onPress={handleSubmit(onSubmit)}
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
