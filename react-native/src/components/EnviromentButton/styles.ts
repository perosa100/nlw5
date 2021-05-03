import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type props = {
  active: boolean
}
export const Container = styled(RectButton)<props>`
  background-color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.green_light
      : ({ theme }) => theme.colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 10px;
`

export const EnviromentButtonText = styled.Text<props>`
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.green_dark
      : ({ theme }) => theme.colors.heading};
  font-family: ${(props) =>
    props.active
      ? ({ theme }) => theme.fonts.heading
      : ({ theme }) => theme.fonts.text};
`
