import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./App"
import { AppContextProvider } from "./components/AppContextProvider"

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>, document.getElementById("root")
)
