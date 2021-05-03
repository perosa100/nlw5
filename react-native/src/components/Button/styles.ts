import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const NextButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
`
export const NextButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`
