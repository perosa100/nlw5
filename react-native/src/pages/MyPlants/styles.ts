import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0 30px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const SpotLight = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_light};
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`
export const SpotLightText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.blue};
  padding-right: 20px;
  border-radius: 20px;
  text-align: justify;
`
export const Plants = styled.View`
  flex: 1;
  width: 100%;
`
export const PlantsTitleText = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 20px;
  margin-bottom: 20px;
`
