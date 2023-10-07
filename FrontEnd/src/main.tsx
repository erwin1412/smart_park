import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./store/rootReducer.ts"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const store = configureStore({
  reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
