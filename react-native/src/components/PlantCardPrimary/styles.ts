import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  margin: 10px;
`
export const ContainerText = styled.Text`
  color: ${({ theme }) => theme.colors.green_dark};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: 16px;
  margin-bottom: 16px;
`
