import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'dm-sans', sans-serif`,
    title: `'dm-sans', sans-serif`,
    body: `'dm-sans', sans-serif`,
  },
  colors: {
    base: {
        white: '#FFFFFF',
        black: '#000000',
    },

    separator: {
        secondary: '#E1E1E1;'
    }, 

    primary: {
        100: '#F4F7F8',
        300: '#81D1FF',
    },

    secondary: {
        500: '#F86338',
    },

    text: {
        title: '#11142D',
        body1: '#515151',
        body2: '#9A9AB0',
    },
  }
})

export default theme