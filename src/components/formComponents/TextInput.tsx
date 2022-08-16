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
    setFormError: any // what type should this be?
  }

const ControlledInput = (props: TextInputProps) => {
  const formContext = useFormContext()
  const { formState } = formContext

  const { name, label, rules, defaultValue, ...inputProps } = props
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
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        {...inputProps}
      />
      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
      {hasError && <Text>{formState.errors[name].message}</Text>}
    </View>
  )
}

export const TextInput: FC<TextInputProps> = props => {
  const { name, rules, label, defaultValue, setFormError, ...inputProps } =
    props

  const formContext = useFormContext()

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined'
    console.error(msg)
    setFormError(true)
    return null
  }

  return <ControlledInput {...props} />
}
