import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: {
        light: string
        medium: string
        dark: string
      }
      gray: {
        '0': string
        '100': string
        '200': string
        '300': string
        '400': string
        '500': string
      }
    },
    fontSize: {
      small: string
      medium: string
      large: string
    }
  }
}
