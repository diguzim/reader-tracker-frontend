import { ThemeProvider } from 'styled-components';
import { theme } from 'styles'

import 'styles/globals.css'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}