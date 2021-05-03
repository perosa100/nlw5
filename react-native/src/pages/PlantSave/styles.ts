import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
`
export const PlantInfo = styled.View`
  flex: 1;
  padding: 30px 40px 30px 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const TextPlant = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 15px;
`
export const TextPlantAbout = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 17px;
  margin-top: 4px;
`

export const ControllerMenu = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: ${`${getBottomSpace()}px` || `20px`};
`

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`
export const ImageWaterdrop = styled.Image`
  width: 56px;
  height: 56px;
`

export const TextTip = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 17px;
  text-align: justify;
`
export const TextAlertLabel = styled.Text`
  text-align: center;
  font-size: 12px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.complement};
`

export const DataTimeButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const DataTimeButtonText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`
