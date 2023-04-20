import { Router } from "./Router"
import { defaultTheme } from "./global/themes/default"
import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./contexts/CartContext"
import { RequestContextProvider } from "./contexts/RequestContext"

function App() {
  return (
    <CartContextProvider>
      <RequestContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
        </ThemeProvider>
      </RequestContextProvider>
    </CartContextProvider>
  )
}

export default App
