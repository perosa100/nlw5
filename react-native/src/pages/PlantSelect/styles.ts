import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { EnvironmentsProps, PlantProps } from '.'
import { PlantCardPrimaryProps } from '../../components/PlantCardPrimary'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
  padding-right: 30px;
  padding-left: 30px;
`

export const Title = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`
export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  line-height: 20px;
`

export const ContentPlant = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
`
