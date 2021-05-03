import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
export const Content = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`
export const ContentTextEmoji = styled.Text`
  font-size: 32px;
`
export const ContentTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 22px;
  padding-top: 20px;
`

export const ContentText = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.text};
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`
