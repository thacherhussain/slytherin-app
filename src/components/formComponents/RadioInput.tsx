import React, { FC } from 'react'
import { View } from 'react-native'
import { Text, Radio, IRadioGroupProps } from 'native-base'
import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form'

import { OptionsInput } from './types'

type RadioInputProps = UseControllerProps &
  IRadioGroupProps & {
    name: string
    label: string
    options: OptionsInput[]
    defaultValue?: string
    setFormError?: any
  }

export const RadioInput: FC<RadioInputProps> = props => {
  const formContext = useFormContext()
  const { formState } = formContext
  const { name, label, options, defaultValue, rules, ...inputProps } = props
  const { field } = useController({ name, rules })
  const hasError = Boolean(formState?.errors[name])

  return (
    <View>
      {label && (
        <Text
          fontSize={'sm'}
          fontWeight={500}
          color={'gray.500'}
          paddingBottom={'1'}
        >
          {label}
        </Text>
      )}
      <Radio.Group
        name={name}
        flexDirection={'column'}
        onChange={field.onChange}
        defaultValue={defaultValue}
        {...inputProps}
      >
        {options.map((option, i) => (
          <Radio key={i} value={option.value} size={'lg'}>
            <Text fontSize={'lg'} ml={1} mr={3}>
              {option.label}
            </Text>
          </Radio>
        ))}
      </Radio.Group>

      {/*// @ts-ignore */}
      {hasError && <Text>{formState.errors[name].message}</Text>}
    </View>
  )
}
