import type {NativeStackScreenProps} from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Data: undefined
  Another: undefined
}

export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>
export type DataProps = NativeStackScreenProps<MainStackParamList, 'Data'>
export type AnotherProps = NativeStackScreenProps<MainStackParamList, 'Another'>
