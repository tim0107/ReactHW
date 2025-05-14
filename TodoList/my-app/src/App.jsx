
import Add from './Component/Add/add'
import { ThemeContext, ThemeProvider } from './context/themeContext'

function App() {
  

  return (
    <ThemeProvider >
      <Add/>
    </ThemeProvider>
  )
}

export default App
