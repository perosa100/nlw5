import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ContainerText = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.heading};
`

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  background-color: ${({ theme }) => theme.colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 10px;
  padding-left: 15px;
`
export const Details = styled.View`
  align-items: flex-end;
`
export const DetailsTextTimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.body_light};
`
export const DetailsTextTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.body_dark};
`
ButtonRemove
