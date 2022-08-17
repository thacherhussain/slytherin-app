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
                  options={[
                    'Slytherin',
                    'Gryfindor',
                    'Ravenclaw',
                    'Hufflepuff',
                  ]}
                />
              </Box>
              <Box>
                <RadioInput
                  name={'team'}
                  label={'Team'}
                  options={['Order of the Phoenix', 'Death Eaters']}
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
