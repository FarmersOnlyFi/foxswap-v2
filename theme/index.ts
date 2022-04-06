import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const mainTheme = extendTheme({ config }, theme)

export default mainTheme