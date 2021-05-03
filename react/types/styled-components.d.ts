import { theme } from '../src/styles/theme'

type Theme = typeof theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
