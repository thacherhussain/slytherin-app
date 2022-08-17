import React, { useState } from 'react'
import { useTheme, Box, Center, VStack, Button } from 'native-base'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form'

import { Page, TextInput, SelectInput, RadioInput } from '@components'

type FieldValues = {
  name: string
  house: string
  team: string
}

const houseOptions = [
  {
    label: 'Slytherin',
    value: 'slytherin',
  },
  {
    label: 'Gryfindor',
    value: 'gryfindor',
  },
  {
    label: 'Ravenclaw',
    value: 'ravenclaw',
  },
  {
    label: 'Hufflepuff',
    value: 'hufflepuff',
  },
]

const teamOptions = [
  {
    label: 'Order of the Phoenix',
    value: 'phoenix',
  },
  {
    label: 'Death Eaters',
    value: 'death',
  },
]

export const Profile = () => {
  const { colors } = useTheme()

  const { ...methods } = useForm({ mode: 'onChange' })

  const onSubmit: SubmitHandler<FieldValues> = data => console.log({ data })

  const [, setError] = useState<boolean>(false)

  const onError: SubmitErrorHandler<FieldValues> = errors => {
    return console.log({ errors })
  }

  return (
    <Page>
      <Center pt={'12'}>
        <VStack width='90%' space={4}>
          <FormProvider {...methods}>
            <VStack width='90%' space={4}>
              <TextInput
                name={'name'}
                label={'Name'}
                setFormError={setError}
                rules={{ required: 'Name is required' }}
              />
              <Box>
                <SelectInput
                  name={'house'}
                  label={'House'}
                  options={houseOptions}
                />
              </Box>
              <Box>
                <RadioInput
                  name={'team'}
                  label={'Team'}
                  options={teamOptions}
                />
              </Box>
            </VStack>
          </FormProvider>
          <Box paddingTop={6}>
            <Button
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
