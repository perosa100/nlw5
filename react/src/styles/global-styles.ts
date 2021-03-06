import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @media (max-width:1080px){
    html{
      font-size:93.75%
    }
  }
    @media (max-width:720px){
    html{
      font-size:87.5%
    }
  }

  body {
    font-size: 1.6rem;
    background:${({ theme }) => theme.colors.gray100};
    font-family: ${({ theme }) => theme.font.family.default};
  }

body,input, textarea,button{
  font: 500 1rem ${({ theme }) => theme.font.family.default};
  color:${({ theme }) => theme.colors.gray500};
}

h1,h2,h3,h4,h5,h6{
  font-weight:600;
  font-family:  ${({ theme }) => theme.font.family.secondary};
}
  h1{
     font-size: 2rem;
  }

  h2{
     font-size: 1.5rem;
  }

 button {
     cursor:pointer;
  }
`
