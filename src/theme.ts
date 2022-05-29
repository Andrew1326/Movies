import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const theme: ThemeConfig = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif'
  },
  config: { initialColorMode: 'dark'}
});

export default theme