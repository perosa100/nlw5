import styled from 'styled-components/native'

type TextInputProps = {
  isFocused: boolean
  isFilled: boolean
}
export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`
export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`
export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 54px;
  padding-right: 54px;
  align-items: center;
`
export const FormTextTitle = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
`

export const FormText = styled.Text`
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`
export const InputText = styled.TextInput<TextInputProps>`
  border-bottom-width: 1px;
  border-color: ${(props) =>
    props.isFocused || props.isFilled
      ? ({ theme }) => theme.colors.green
      : ({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
