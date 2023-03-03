import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="solid" clickFn={() => window.alert('clicked')}>
        Send
      </Button>
      <Button variant="outline" clickFn={() => window.alert('clicked')}>
        Send
      </Button>
      <Button variant="discrete" clickFn={() => window.alert('clicked')}>
        Send
      </Button>
      <Button variant="outline" clickFn={() => window.alert('clicked')}>
        Send
      </Button>
      <Button variant="solid" clickFn={() => window.alert('clicked')}>
        Send
      </Button>
    </ThemeProvider>
  )
}
