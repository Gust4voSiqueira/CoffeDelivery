import { Router } from "./Router"
import { defaultTheme } from "./global/themes/default"
import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </CartContextProvider>
  )
}

export default App
