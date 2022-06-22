import type {NativeStackScreenProps} from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Characters: undefined
  SingleCharacter: {
    id: number
    name: string
  }
  SortingHat: undefined
  Emblem: undefined
  Traits: undefined
  Salazar: undefined
  BloodyBaron: undefined
  SchoolStore: undefined
  Snakelets: undefined
  Divination: undefined
  Blank: undefined
}

export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>
export type CharactersProps = NativeStackScreenProps<
  MainStackParamList,
  'Characters'
>
export type SingleCharacterProps = NativeStackScreenProps<
  MainStackParamList,
  'SingleCharacter'
>

export type SortingHatProps = NativeStackScreenProps<
  MainStackParamList,
  'SortingHat'
>
export type EmblemProps = NativeStackScreenProps<MainStackParamList, 'Emblem'>
export type TraitsProps = NativeStackScreenProps<MainStackParamList, 'Traits'>
export type SalazarProps = NativeStackScreenProps<MainStackParamList, 'Salazar'>
export type BloodyBaronProps = NativeStackScreenProps<
  MainStackParamList,
  'BloodyBaron'
>

export type SnakeletsProps = NativeStackScreenProps<
  MainStackParamList,
  'Snakelets'
>

export type SchoolStoreProps = NativeStackScreenProps<
  MainStackParamList,
  'SchoolStore'
>

export type BlankProps = NativeStackScreenProps<MainStackParamList, 'Blank'>
