import React, { FC } from 'react'
import { View } from 'react-native'
import { Text, Select, ISelectProps, CheckIcon } from 'native-base'

import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form'

type OptionsInput = {
  label: string
  value: string
}

type SelectInputProps = UseControllerProps &
  ISelectProps & {
    name: string
    label: string
    options: OptionsInput[]
    defaultValue?: string
    setFormError?: any
  }

export const SelectInput: FC<SelectInputProps> = props => {
  const formContext = useFormContext()
  const { formState } = formContext
  const { name, label, options, defaultValue, rules, ...inputProps } = props
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
      <Select
        size={'xl'}
        selectedValue={field.value}
        onValueChange={field.onChange}
        defaultValue={defaultValue}
        {...inputProps}
        _selectedItem={{
          endIcon: <CheckIcon size='5' />,
        }}
      >
        {options.map((option, i) => (
          <Select.Item key={i} label={option.label} value={option.value} />
        ))}
      </Select>

      {/*// @ts-ignore */}
      {hasError && <Text>{formState.errors[name].message}</Text>}
    </View>
  )
}
