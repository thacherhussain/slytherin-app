import React, { FC } from 'react'
import { View } from 'react-native'
import { Text, Input, IInputProps } from 'native-base'
import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form'

type TextInputProps = UseControllerProps &
  IInputProps & {
    name: string
    label: string
    defaultValue?: string
    placeholder?: string
    setFormError?: any
  }

export const TextInput: FC<TextInputProps> = props => {
  const formContext = useFormContext()
  const { formState } = formContext
  const { name, label, defaultValue, placeholder, rules, ...inputProps } = props
  const { field } = useController({ name, rules, defaultValue })
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
      <Input
        size={'xl'}
        value={field.value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        {...inputProps}
      />

      {/*// @ts-ignore */}
      {hasError && <Text>{formState.errors[name].message}</Text>}
    </View>
  )
}
