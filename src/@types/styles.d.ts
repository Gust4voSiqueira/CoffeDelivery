import 'styled-compoennts'
import { defaultTheme } from '../global/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
