import type {NativeStackScreenProps} from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Characters: undefined
  SingleCharacter: {
    id: number
  }
  EducationOverview: undefined
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

export type EducationOverviewProps = NativeStackScreenProps<
  MainStackParamList,
  'EducationOverview'
>
