import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: ${getStatusBarHeight()}px;
`
//${({ theme }) => theme.colors.background};
export const TextHi = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`
export const TextName = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 40px;
`
export const ImageLogo = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 50px;
`
