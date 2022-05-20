import type {NativeStackScreenProps} from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Characters: undefined
  SingleCharacter: {
    id: number
    name: string
  }
  History: undefined
  SchoolStore: undefined
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

export type HistoryProps = NativeStackScreenProps<MainStackParamList, 'History'>

export type SchoolStoreProps = NativeStackScreenProps<
  MainStackParamList,
  'SchoolStore'
>

export type BlankProps = NativeStackScreenProps<MainStackParamList, 'Blank'>
